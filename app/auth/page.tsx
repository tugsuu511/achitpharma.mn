// app/auth/page.tsx
"use client"

import { redirect } from "next/navigation";
import { AuthPage } from "@/components/auth/AuthPage";

export const dynamic = "force-dynamic";

export default function Page({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) {
  const mode = searchParams?.mode;

  if (!mode) redirect("/auth?mode=login");
  if (mode !== "login" && mode !== "signup") {
    redirect("/auth?mode=login");
  }

  return <AuthPage />;
}
