import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic"; 

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/auth?mode=login");

  const dbUser = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { id: true, email: true, name: true, image: true },
  });

  if (!dbUser) redirect("/auth?mode=login");

  const sessionEmail = session.user.email ?? "";
  const dbEmail = dbUser.email ?? "";

  const mismatch = sessionEmail && dbEmail && sessionEmail !== dbEmail;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Profile</h1>

      <div className="rounded-xl border p-4 space-y-2">
        <div><b>Session email:</b> {sessionEmail || "—"}</div>
        <div><b>DB email:</b> {dbEmail || "—"}</div>
        <div><b>User id:</b> {session.user.id} {session.user.role}</div>

        {mismatch && (
          <p className="text-red-600 text-sm">
            ⚠️ Session email ба DB email зөрж байна. Logout хийгээд дахин зөв account-оор нэвтэрч үзээрэй.
          </p>
        )}
      </div>
    </div>
  );
}
