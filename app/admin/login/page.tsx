"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("achitpharma4@gmail.com");
  const [password, setPassword] = useState("achitpharma123");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/admin/orders",
    });

    if (res?.error) setError("Нэвтрэх нэр//нууц үг буруу байна.");
  }

  return (
    <main style={{ padding: 24, maxWidth: 420 }}>
      <h1 style={{ fontSize: 22, fontWeight: 700 }}>Admin Login</h1>

      <form onSubmit={onSubmit} style={{ marginTop: 12, display: "grid", gap: 10 }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: 10, border: "1px solid #e5e7eb", borderRadius: 10 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: 10, border: "1px solid #e5e7eb", borderRadius: 10 }}
        />
        <button style={{ padding: 10, borderRadius: 10, border: "1px solid #e5e7eb" }}>
          Sign in
        </button>
        {error ? <div style={{ color: "crimson" }}>{error}</div> : null}
      </form>
    </main>
  );
}
