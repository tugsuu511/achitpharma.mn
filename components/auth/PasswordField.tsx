"use client";

import { useState } from "react";

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

export function PasswordField({
  label,
  value,
  onChange,
  error,
  autoComplete,
  placeholder = "••••••••",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  const [show, setShow] = useState(false);

  const baseInput =
    "w-full border rounded-xl px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-black/10 transition";
  const normalBorder = "border-gray-300 focus:border-gray-400";
  const errorBorder = "border-red-500 focus:ring-red-200";

  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>

      <div className="relative">
        <input
          className={`${baseInput} ${error ? errorBorder : normalBorder}`}
          placeholder={placeholder}
          type={show ? "text" : "password"}
          value={value}
          onChange={(ev) => onChange(ev.target.value)}
          autoComplete={autoComplete}
        />

        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-800"
          aria-label={show ? "Hide password" : "Show password"}
          title={show ? "Hide" : "Show"}
        >
          {show ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>

      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}
