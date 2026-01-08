import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const normalizedEmail = String(email || "").toLowerCase().trim();
  const pwd = String(password || "");

  if (!normalizedEmail || !pwd) {
    return new NextResponse("Email/password required", { status: 400 });
  }

  // ✅ 1) давхардсан эсэхийг ШАЛГААД, үүсгэхгүйгээр буцаана
  const exists = await prisma.user.findUnique({ where: { email: normalizedEmail } });
  if (exists) {
    return NextResponse.json(
      { code: "EMAIL_TAKEN", message: "Энэ имэйл аль хэдийн бүртгэлтэй байна." },
      { status: 409 }
    );
  }

  const passwordHash = await hash(pwd, 10);

  await prisma.user.create({
    data: {
      email: normalizedEmail,
      passwordHash,
      role: "USER",
    },
  });

  return NextResponse.json({ ok: true });
}
