import { sql } from "../lib/db";  // Import hàm SQL kết nối cơ sở dữ liệu
import { NextResponse, NextRequest } from "next/server";

// API GET để lấy thông tin
export async function GET(req: NextRequest) {
  try {
    // Lấy tham số từ query string
    const url = req.nextUrl;
    const maPhieu = url.searchParams.get('maPhieu');
    const soDienThoai = url.searchParams.get('soDienThoai');
    
    if (!maPhieu || !soDienThoai) {
      return NextResponse.json({ message: "Thiếu tham số maPhieu hoặc soDienThoai" }, { status: 400 });
    }

    // Truy vấn dữ liệu từ cơ sở dữ liệu, kết hợp bảng nguoi_dang_ky và phieu_dang_ky
    const phieu = await sql`
      SELECT phieu_dang_ky.*, nguoi_dang_ky.so_dien_thoai
      FROM phieu_dang_ky
      JOIN nguoi_dang_ky ON phieu_dang_ky.id = nguoi_dang_ky.id
      WHERE phieu_dang_ky.id = ${maPhieu} AND nguoi_dang_ky.so_dien_thoai = ${soDienThoai}
    `;

    if (phieu.length === 0) {
      return NextResponse.json({ message: "Không tìm thấy phiếu đăng ký với thông tin đã cung cấp" }, { status: 404 });
    }

    // Trả về dữ liệu tìm thấy
    return NextResponse.json({ phieu: phieu[0] });
  } catch (error) {
    console.error("Lỗi khi lấy phiếu đăng ký:", error);
    return NextResponse.json({ message: "Lỗi hệ thống khi lấy dữ liệu" }, { status: 500 });
  }
}
