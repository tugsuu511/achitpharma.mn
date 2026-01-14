// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { authOptions } from "@/lib/auth";
// import { prisma } from "@/lib/prisma"; // танайд prisma client байгаа замаар тааруул

// export default async function ProfilePage() {
//   const session = await getServerSession(authOptions);

//   // ✅ нэвтрээгүй бол login page руу
//   if (!session?.user?.id) redirect("/api?mode=login");

//   // ✅ DB дээрх user + сүүлийн захиалгууд
//   const user = await prisma.user.findUnique({
//     where: { id: session.user.id },
//     include: {
//       orders: { orderBy: { createdAt: "desc" }, take: 10 },
//     },
//   });

//   if (!user) redirect("/api?mode=login");

//   return (
//     <div className="max-w-2xl mx-auto p-6 space-y-4">
//       <h1 className="text-xl font-semibold">Профайл</h1>

//       <div className="rounded-xl border p-4">
//         <div><b>Email:</b> {user.email}</div>
//         <div><b>Name:</b> {user.name ?? "—"}</div>
//         <div><b>Role:</b> {user.role ?? "USER"}</div>
//       </div>

//       <div className="rounded-xl border p-4">
//         <h2 className="font-semibold mb-2">Сүүлийн захиалгууд</h2>
//         {user.orders.length === 0 ? (
//           <div>Захиалга алга.</div>
//         ) : (
//           <ul className="space-y-2">
//             {user.orders.map((o) => (
//               <li key={o.id} className="border rounded-lg p-3">
//                 <div><b>Order:</b> {o.id}</div>
//                 <div><b>Status:</b> {String(o.status)}</div>
//                 <div><b>Created:</b> {new Date(o.createdAt).toLocaleString()}</div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }


import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic"; // ✅ cache-с болж хуучин data харуулах эрсдэл бууруулна

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/api?mode=login");

  const dbUser = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { id: true, email: true, name: true, image: true },
  });

  if (!dbUser) redirect("/api?mode=login");

  const sessionEmail = session.user.email ?? "";
  const dbEmail = dbUser.email ?? "";

  const mismatch = sessionEmail && dbEmail && sessionEmail !== dbEmail;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Profile</h1>

      <div className="rounded-xl border p-4 space-y-2">
        <div><b>Session email:</b> {sessionEmail || "—"}</div>
        <div><b>DB email:</b> {dbEmail || "—"}</div>
        <div><b>User id:</b> {session.user.id}</div>

        {mismatch && (
          <p className="text-red-600 text-sm">
            ⚠️ Session email ба DB email зөрж байна. Logout хийгээд дахин зөв account-оор нэвтэрч үзээрэй.
          </p>
        )}
      </div>
    </div>
  );
}
