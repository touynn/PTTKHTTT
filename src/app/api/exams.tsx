import { sql } from "../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Adjust the query as needed (here we join 'lich_thi' with 'phong_thi')
    const exams = await sql`
      SELECT 
        bai_thi.id AS code,
        to_char(lich_thi.thoi_gian_thi, 'DD/MM/YYYY') AS date,
        phong_thi.ten_phong_thi AS room,
        lich_thi.trang_thai AS status
      FROM bai_thi
      JOIN lich_thi ON bai_thi.ma_lich_thi = lich_thi.id
      JOIN phong_thi ON lich_thi.ma_phong_thi = phong_thi.id
    `;
    return NextResponse.json({ exams });
  } catch (error) {
    console.error("Error fetching exams:", error);
    return NextResponse.json({ message: "Failed to fetch exams" }, { status: 500 });
  }
}