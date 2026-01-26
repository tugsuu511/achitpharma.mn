"use client";

import * as React from "react";

export function ProductDetailBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-purple-50 to-orange-50" />
      {/* Subtle Blobs */}
      <div className="absolute top-[-10%] left-[-10%] h-[60vh] w-[60vh] rounded-full bg-teal-200/30 blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[60vh] w-[60vh] rounded-full bg-orange-200/30 blur-[100px]" />
      <div className="absolute top-[40%] left-[40%] h-[40vh] w-[40vh] rounded-full bg-purple-200/20 blur-[80px]" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
