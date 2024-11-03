import { prisma } from "@/prisma/prisma-client";
import { authOptions } from "@/shared/constants/auth-options";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: any, res: any) {
  try {
    const user = await getServerSession(req, res, authOptions);

    if (!user) {
      return NextResponse.json(
        { message: "Вы не авторизованы" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "[USER_GET] Server error" },
      { status: 500 }
    );
  }
}
