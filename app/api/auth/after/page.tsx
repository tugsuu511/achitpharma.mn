import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic"; // ✅ cache-с хамгаална

export default async function AfterAuthPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) redirect("/api?mode=login");

  const dbUser = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { role: true },
  });

  const role = dbUser?.role ?? session.user.role ?? "USER";

  redirect(role === "ADMIN" ? "/admin" : "/");
}
