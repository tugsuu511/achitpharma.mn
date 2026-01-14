// app/auth/page.tsx
import { redirect } from "next/navigation";
import { AuthPage } from "@/components/auth/AuthPage";

export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  const { mode } = await searchParams;

  if (!mode) redirect("/auth?mode=login");
  if (mode !== "login" && mode !== "signup") redirect("/auth?mode=login");

  return <AuthPage />;
}
