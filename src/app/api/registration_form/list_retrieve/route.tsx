import { sql } from "@/lib/db";  // Import hàm SQL kết nối cơ sở dữ liệu
import { NextResponse, NextRequest } from "next/server";
import { Query } from '@/api/query';


// API GET để lấy thông tin
export async function GET(req: NextRequest) {

  try {

    // Truy vấn dữ liệu từ cơ sở dữ liệu, kết hợp bảng nguoi_dang_ky và phieu_dang_ky
    const query = `
      SELECT *
      FROM phieu_dang_ky
      ORDER BY RANDOM()
      LIMIT 10;
    `;

    const response = await Query(query);
    const data = await response.json();

    // Trả về dữ liệu tìm thấy
    return NextResponse.json(data);
  } catch (error) {
    console.error("Lỗi khi lấy phiếu đăng ký:", error);
    return NextResponse.json({ message: "Lỗi hệ thống khi lấy dữ liệu" }, { status: 500 });
  }
}
