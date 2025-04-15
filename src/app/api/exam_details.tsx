import { sql } from "../lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { exam_code } = await request.json();

    const result = await sql`
      SELECT 
        bt.id AS examCode,
        kt.so_diem AS result,
        cc.id AS certificateNumber,
        cc.ngay_in AS issueDate
      FROM bai_thi bt
      LEFT JOIN ket_qua_thi kt ON bt.id = kt.ma_bai_thi
      LEFT JOIN chung_chi cc ON bt.id = cc.ma_bai_thi
      WHERE bt.id = ${exam_code}
    `;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}