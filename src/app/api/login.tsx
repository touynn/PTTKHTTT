import { sql } from "../lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { ten_dang_nhap, mat_khau } = await request.json();

    const result = await sql`
      SELECT * FROM tai_khoan
      WHERE ten_dang_nhap = ${ten_dang_nhap} AND mat_khau = ${mat_khau}
    `;

    if (result.length > 0) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 401 });
    }
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}