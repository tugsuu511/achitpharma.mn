"use client";

import { useMemo, useState } from "react";
import { signIn } from "next-auth/react";

type Mode = "login" | "signup";
type Errors = Partial<{
  email: string;
  password: string;
  confirmPassword: string;
  form: string;
}>;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 5.27 4.28 4 20 19.72 18.73 21l-3.06-3.06c-1.1.5-2.32.79-3.67.79-7 0-10-7-10-7a18.7 18.7 0 0 1 4.23-5.37L3 5.27Zm8.7 8.7 1.6 1.6c-.4.26-.88.43-1.3.43a3 3 0 0 1-3-3c0-.42.17-.9.43-1.3l1.6 1.6Zm7.3 1.03-1.63-1.63A5 5 0 0 0 10.63 6.6L9.06 5.03C10 4.73 11 4.5 12 4.5c7 0 10 7 10 7a18.9 18.9 0 0 1-3 3.5ZM12 9a3 3 0 0 1 3 3c0 .26-.04.51-.11.75L11.25 9.1c.24-.07.49-.1.75-.1Z"
      />
    </svg>
  );
}

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [errors, setErrors] = useState<Errors>({});
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const normalizedEmail = useMemo(() => email.toLowerCase().trim(), [email]);

  const baseInput =
    "w-full border rounded-xl px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-black/10 transition";
  const normalBorder = "border-gray-300 focus:border-gray-400";
  const errorBorder = "border-red-500 focus:ring-red-200";

  function validate(currentMode: Mode) {
    const e: Errors = {};

    if (!normalizedEmail) e.email = "Имэйлээ оруулна уу.";
    else if (!isValidEmail(normalizedEmail)) e.email = "Имэйлийн формат буруу байна.";

    if (!password) e.password = "Нууц үгээ оруулна уу.";
    else if (password.length < 6) e.password = "Нууц үг хамгийн багадаа 6 тэмдэгт байна.";

    if (currentMode === "signup") {
      if (!confirmPassword) e.confirmPassword = "Нууц үгээ давтаж оруулна уу.";
      else if (confirmPassword !== password) e.confirmPassword = "Нууц үг таарахгүй байна.";
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
    // ✅ 409 = email бүртгэлтэй
    if (r.status === 409) {
      const data = await r.json().catch(() => null);

      setErrors({
        email: data?.message ?? "Энэ имэйл аль хэдийн бүртгэлтэй байна. Нэвтэрч орно уу.",
      });

      // хүсвэл автоматаар login mode руу шилжүүлж болно:
      // setMode("login");

      return;
    }

    // бусад алдаа
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
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-[420px] mx-auto mt-10 px-4">
      <h1 className="text-2xl font-semibold">
        {mode === "login" ? "Нэвтрэх" : "Бүртгүүлэх"}
      </h1>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        {/* Email */}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            className={`${baseInput} pr-3 ${errors.email ? errorBorder : normalBorder}`}
            placeholder="example@mail.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            autoComplete="email"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm mb-1">Password</label>
          <div className="relative">
            <input
              className={`${baseInput} ${errors.password ? errorBorder : normalBorder}`}
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-800"
              aria-label={showPassword ? "Hide password" : "Show password"}
              title={showPassword ? "Hide" : "Show"}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Confirm password (signup only) */}
        {mode === "signup" && (
          <div>
            <label className="block text-sm mb-1">Confirm password</label>
            <div className="relative">
              <input
                className={`${baseInput} ${errors.confirmPassword ? errorBorder : normalBorder}`}
                placeholder="••••••••"
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(ev) => setConfirmPassword(ev.target.value)}
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((s) => !s)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-800"
                aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                title={showConfirm ? "Hide" : "Show"}
              >
                {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>
        )}

        {errors.form && <p className="text-red-600 text-sm">{errors.form}</p>}
        {msg && <p className="text-green-600 text-sm">{msg}</p>}

        <button
          disabled={loading}
          className="w-full rounded-xl border border-gray-300 py-2 font-medium hover:bg-gray-50 disabled:opacity-60"
        >
          {loading ? "Түр хүлээнэ үү..." : mode === "login" ? "Нэвтрэх" : "Бүртгэл үүсгэх"}
        </button>
      </form>

      <div className="mt-4 text-sm">
        {mode === "login" ? (
          <span>
            Бүртгэлгүй юу?{" "}
            <button
              type="button"
              className="underline"
              onClick={() => {
                setMode("signup");
                setErrors({});
                setMsg("");
                setConfirmPassword("");
                setShowConfirm(false);
              }}
            >
              Бүртгүүлэх
            </button>
          </span>
        ) : (
          <span>
            Бүртгэлтэй юу?{" "}
            <button
              type="button"
              className="underline"
              onClick={() => {
                setMode("login");
                setErrors({});
                setMsg("");
                setConfirmPassword("");
                setShowConfirm(false);
              }}
            >
              Нэвтрэх
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
