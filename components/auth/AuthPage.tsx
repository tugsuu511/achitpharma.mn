"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { AuthForm } from "./AuthForm";

export type Mode = "login" | "signup";

function parseMode(value: string | null): Mode {
  return value === "signup" ? "signup" : "login";
}

export function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const mode = parseMode(searchParams.get("mode"));

  const setMode = (m: Mode) => {
    router.replace(`/auth?mode=${m}`);
  };

  return (
    <div className="max-w-[420px] mx-auto mt-10 px-4">
      <h1 className="text-2xl font-semibold">
        {mode === "login" ? "Нэвтрэх" : "Бүртгүүлэх"}
      </h1>

      <AuthForm key={mode} mode={mode} />

      <div className="mt-4 text-sm">
        {mode === "login" ? (
          <span>
            Бүртгэлгүй юу?{" "}
            <button
              type="button"
              className="underline font-bold"
              onClick={() => setMode("signup")}
            >
              Бүртгүүлэх
            </button>
          </span>
        ) : (
          <span>
            Аль хэдийн бүртгүүлсэн үү?{" "}
            <button
              type="button"
              className="underline font-bold"
              onClick={() => setMode("login")}
            >
              Нэвтрэх
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
