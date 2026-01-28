"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

export function FirstVisitDialog() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    if (!open || closing) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open, closing]);

  if (!open) return null;

  const closeDialog = () => {
    if (closing) return;
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-300 ${
        closing ? "opacity-0" : "opacity-100 animate-in fade-in-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Анхны нэвтрэлтийн зурагт мэдээлэл"
      onClick={closeDialog}
    >
      <div
        className={`relative w-full max-w-xl origin-center transform-gpu overflow-hidden rounded-2xl bg-white shadow-xl will-change-transform ${
          closing ? "dialog-swipe-up" : "dialog-swipe-down"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeDialog}
          aria-label="Хаах"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-slate-600 shadow transition hover:bg-white hover:text-slate-800"
        >
          <X className="h-4 w-4" />
        </button>
        <Image
          src="/brand/dialog.jpg"
          alt="Dialog мэдээллийн зураг"
          width={1200}
          height={1600}
          className="h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}
