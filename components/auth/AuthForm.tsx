"use client";

import { useState, useMemo } from "react";
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

      await signIn("google", { callbackUrl: "/auth/after", redirect: true });
    } catch {
      setErrors({ form: "Системийн алдаа гарлаа. Дахин оролдоно уу." });
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setLoading(true);
    try {
      await signIn("google", { callbackUrl: "/auth/after", redirect: true });
    } catch {
      setErrors({ form: "Google нэвтрэхэд алдаа гарлаа. Дахин оролдоно уу." });
      setLoading(false);
    }
  }

  const baseInput =
    "w-full border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 transition";
  const normalBorder = "border-gray-300 focus:border-gray-400";
  const errorBorder = "border-red-500 focus:ring-red-200";

  return (
    <div className="mt-6 space-y-4">
      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-xl border border-gray-300 py-2 font-medium hover:bg-gray-50 disabled:opacity-60 transition"
      >
        Google-аар нэвтрэх
      </button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">эсвэл</span>
        </div>
      </div>

      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            className={`${baseInput} ${errors.email ? errorBorder : normalBorder}`}
            placeholder="example@mail.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            autoComplete="email"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <PasswordField
          label="Password"
          value={password}
          onChange={setPassword}
          error={errors.password}
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
        />

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
          {loading ? "Түр хүлээнэ үү..." : mode === "login" ? "Нэвтрэх" : "Бүртгэл үүсгэх"}
        </button>
      </form>
    </div>
  );
}
