import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  // ✅ Credentials provider зөвхөн JWT strategy дээр ажиллана
  session: { strategy: "jwt" },

  // ✅ secret заавал
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase().trim();
        const password = credentials?.password ?? "";

        if (!email || !password) return null;

        const user = await prisma.user.findUnique({
          where: { email },
          select: { id: true, email: true, name: true, passwordHash: true, role: true },
        });

        if (!user?.passwordHash) return null;

        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;

        // types/next-auth.d.ts дээр User.role required болсон тул role буцаана
        return {
          id: user.id,
          email: user.email,
          name: user.name ?? "Admin",
          role: (user.role as "USER" | "ADMIN") ?? "USER",
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token }) {
      if (!token.email) return token;

      const dbUser = await prisma.user.findUnique({
        where: { email: token.email },
        select: { id: true, role: true, name: true },
      });

      if (dbUser) {
        token.id = dbUser.id;
        token.role = (dbUser.role as "USER" | "ADMIN") ?? "USER";
        token.name = dbUser.name ?? token.name;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id ?? session.user.id;
      session.user.role = token.role ?? "USER";
      session.user.email = token.email ?? session.user.email;
      session.user.name = token.name ?? session.user.name;
      return session;
    },
  },

  pages: {
    signIn: "/admin/login",
  },
};
