/**
 * NextAuth Configuration with Google OAuth
 * 
 * GOOGLE OAUTH SETUP INSTRUCTIONS:
 * =================================
 * 
 * 1. Go to Google Cloud Console: https://console.cloud.google.com/
 * 2. Create a new project or select an existing one
 * 3. Enable Google+ API:
 *    - Navigate to "APIs & Services" > "Library"
 *    - Search for "Google+ API" and enable it
 * 4. Create OAuth 2.0 Credentials:
 *    - Go to "APIs & Services" > "Credentials"
 *    - Click "Create Credentials" > "OAuth client ID"
 *    - ⚠️  IMPORTANT: Select "Web application" as the application type (NOT "Desktop app")
 *    - Add Authorized JavaScript origins:
 *      * http://localhost:3000 (for development)
 *      * https://your-domain.com (for production)
 *    - Add Authorized redirect URIs:
 *      * http://localhost:3000/api/auth/callback/google (for development)
 *      * https://your-domain.com/api/auth/callback/google (for production)
 * 5. Copy the Client ID and Client Secret to your .env.local file
 * 
 * REQUIRED ENVIRONMENT VARIABLES (.env.local):
 * ============================================
 * NEXTAUTH_SECRET=your-secret-key-here (generate with: openssl rand -base64 32)
 * NEXTAUTH_URL=http://localhost:3000 (or your production URL)
 * GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
 * GOOGLE_CLIENT_SECRET=your-google-client-secret
 * 
 * COMMON ISSUES & FIXES:
 * ======================
 * 
 * ❌ Error: "invalid_client" (401)
 *    → Check that OAuth Client type is "Web application" (NOT "Desktop app")
 *    → Verify redirect URI matches exactly:
 *      - Development: http://localhost:3000/api/auth/callback/google
 *      - Production: https://your-domain.com/api/auth/callback/google
 *    → Ensure NEXTAUTH_URL matches your current host:
 *      - Development: http://localhost:3000
 *      - Production: https://your-domain.com
 * 
 * ❌ Error: "redirect_uri_mismatch"
 *    → Add the exact redirect URI to Google Console (see step 4 above)
 *    → Make sure there are no trailing slashes or typos
 *    → Wait a few minutes after updating Google Console settings
 */

import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs";
import type { UserRole } from "@/types/next-auth";
import { prisma } from "@/lib/prisma";

// Validate required environment variables
const requiredEnvVars = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
};

const missingEnvVars = Object.entries(requiredEnvVars)
  .filter(([_, value]) => !value)
  .map(([key]) => key);

if (missingEnvVars.length > 0) {
  console.error(
    `❌ Missing required environment variables: ${missingEnvVars.join(", ")}\n` +
    `Please add them to your .env.local file. See .env.local.example for reference.`
  );
}

// Runtime warning for NEXTAUTH_URL mismatch in development
if (process.env.NODE_ENV === "development" && typeof window === "undefined") {
  const nextAuthUrl = process.env.NEXTAUTH_URL;
  if (nextAuthUrl && !nextAuthUrl.includes("localhost:3000")) {
    console.warn(
      `⚠️  NEXTAUTH_URL is set to "${nextAuthUrl}" but you're running on localhost:3000.\n` +
      `This may cause Google OAuth redirect issues. Consider setting NEXTAUTH_URL=http://localhost:3000 in .env.local`
    );
  }
}

function normalizeRole(role: unknown): UserRole {
  return role === "ADMIN" ? "ADMIN" : "USER";
}

export const authOptions: NextAuthOptions = {
  
  adapter: PrismaAdapter(prisma),
  pages: { signIn: "/auth" },
  session: { strategy: "jwt" },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase().trim();
        const password = credentials?.password;

        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user?.passwordHash) return null;

        const ok = await compare(password, user.passwordHash);
        if (!ok) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name ?? undefined,
          role: normalizeRole(user.role),
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      // For OAuth providers, ensure user role is set from database
      if (account?.provider === "google" && user.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
          select: { role: true },
        });
        if (dbUser) {
          user.role = normalizeRole(dbUser.role);
        }
      }
      return true;
    },

    async jwt({ token, user, account }) {
      // Initial sign in
      if (user) {
        token.role = user.role;
      }

      // For OAuth, fetch user role from database
      if (account?.provider === "google" && token.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email },
          select: { role: true, id: true },
        });

        if (dbUser?.id) token.sub = dbUser.id;
        if (dbUser?.role) token.role = normalizeRole(dbUser.role);
      }

      // For credentials, refresh role from database
      if (token.email && !account) {
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email },
          select: { role: true, id: true },
        });

        if (dbUser?.id) token.sub = dbUser.id;
        if (dbUser?.role) token.role = normalizeRole(dbUser.role);
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.sub ?? "";
      session.user.role = token.role ?? "USER";
      return session;
    },

    async redirect({ url, baseUrl }) {
      // Handle relative URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Handle same origin URLs
      if (new URL(url).origin === baseUrl) return url;
      // Default to base URL (frontend will handle role-based redirect via /api/auth/after)
      return baseUrl;
    },
  },
};
