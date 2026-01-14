"use client";

import { useMemo, useState } from "react";
import { signIn } from "next-auth/react";
import type { Mode } from "./AuthPage";
import { PasswordField } from "./PasswordField";

type Errors = Partial<{
  email: string;
  password: string;
  confirmPassword: string;
  form: string;
}>;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function AuthForm({ mode }: { mode: Mode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const normalizedEmail = useMemo(() => email.toLowerCase().trim(), [email]);

  function validate(currentMode: Mode) {
    const e: Errors = {};

    if (!normalizedEmail) e.email = "Имэйлээ оруулна уу.";
    else if (!isValidEmail(normalizedEmail))
      e.email = "Имэйлийн формат буруу байна.";

    if (!password) e.password = "Нууц үгээ оруулна уу.";
    else if (password.length < 6)
      e.password = "Нууц үг хамгийн багадаа 6 тэмдэгт байна.";

    if (currentMode === "signup") {
      if (!confirmPassword) e.confirmPassword = "Нууц үгээ давтаж оруулна уу.";
      else if (confirmPassword !== password)
        e.confirmPassword = "Нууц үг таарахгүй байна.";
    }

    return e;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    setMsg("");

    const v = validate(mode);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }

    setLoading(true);

    try {
      if (mode === "signup") {
        const r = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: normalizedEmail, password }),
        });

        if (!r.ok) {
          if (r.status === 409) {
            const data = await r.json().catch(() => null);
            setErrors({
              email:
                data?.message ??
                "Энэ имэйл аль хэдийн бүртгэлтэй байна. Нэвтэрч орно уу.",
            });
            return;
          }

          const text = await r.text();
          setErrors({ form: text || "Бүртгэл үүсгэхэд алдаа гарлаа." });
          return;
        }

        setMsg("Бүртгэл амжилттай ✅ Одоо нэвтэрч байна...");
      }

      await signIn("credentials", {
        email: normalizedEmail,
        password,
        redirect: true,
        callbackUrl: "/auth/after",
      });
    } catch {
      setErrors({ form: "Системийн алдаа гарлаа. Дахин оролдоно уу." });
    } finally {
      setLoading(false);
    }
  }

  const baseInput =
    "w-full border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 transition";
  const normalBorder = "border-gray-300 focus:border-gray-400";
  const errorBorder = "border-red-500 focus:ring-red-200";

  async function handleGoogleSignIn() {
    setLoading(true);
    try {
      await signIn(
        "google",
        { callbackUrl: "/api/auth/after", redirect: true },
        { prompt: "select_account" } 
      );
    } catch {
      setErrors({ form: "Google нэвтрэхэд алдаа гарлаа. Дахин оролдоно уу." });
      setLoading(false);
    }
  }

  return (
    <div className="mt-6 space-y-4">
      {/* Google Sign In Button */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-xl border border-gray-300 py-2 font-medium hover:bg-gray-50 disabled:opacity-60 transition"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        <span>Google-аар нэвтрэх</span>
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">эсвэл</span>
        </div>
      </div>

      <form className="space-y-4" onSubmit={onSubmit}>
        {/* Email */}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            className={`${baseInput} ${
              errors.email ? errorBorder : normalBorder
            }`}
            placeholder="example@mail.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <PasswordField
          label="Password"
          value={password}
          onChange={setPassword}
          error={errors.password}
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
        />

        {/* Confirm password */}
        {mode === "signup" && (
          <PasswordField
            label="Confirm password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            error={errors.confirmPassword}
            autoComplete="new-password"
          />
        )}

        {errors.form && <p className="text-red-600 text-sm">{errors.form}</p>}
        {msg && <p className="text-green-600 text-sm">{msg}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl border border-gray-300 py-2 font-medium hover:bg-gray-50 disabled:opacity-60"
        >
          {loading
            ? "Түр хүлээнэ үү..."
            : mode === "login"
            ? "Нэвтрэх"
            : "Бүртгэл үүсгэх"}
        </button>
      </form>
    </div>
  );
}
