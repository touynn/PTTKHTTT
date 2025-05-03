"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Dữ liệu mẫu
// const sampleData = [
//   { id: "100", loaiPhieu: "Đăng ký mới", trangThai: "Đã duyệt" },
//   { id: "102", loaiPhieu: "Gia hạn", trangThai: "Chờ duyệt" },
//   { id: "106", loaiPhieu: "Đăng ký mới", trangThai: "Từ chối" },
//   { id: "110", loaiPhieu: "Chuyển đổi", trangThai: "Đã duyệt" },
//   { id: "105", loaiPhieu: "Gia hạn", trangThai: "Chờ duyệt" },
// ]
const RetrieveForms = async () => {
  try {
    const url = `/api/registration_form/list_retrieve`;
    const res = await fetch(url, {
      method: 'GET',
    });
    const data = await res.json();
    console.log('Result:', data);
    return data.result;
  } catch (error) {
    console.error('Error:', error);
  }
}

interface PhieuDangKy {
  id: string;
  trang_thai: string;
  ma_loai_phieu_dang_ky: string;
  ngay_dang_ky: string;
  ma_nguoi_dang_ky: string
}

export default function DanhSachPage() {
  const router = useRouter();
  const [phieuDangKy, setPhieuDangKy] = useState<PhieuDangKy[]>();

  useEffect(() => {
    const Retrieve = async () => {
      const res = await RetrieveForms();
      console.log(res);
      if (res !== undefined) {
        setPhieuDangKy(res);
      }
    }
    Retrieve();
  }, [setPhieuDangKy]);
  // Quay lại trang chủ
  const handleBack = () => {
    router.push("/user/nh%C3%A2n%20vi%C3%AAn%20ti%E1%BA%BFp%20nh%E1%BA%ADn")
  }

  // Xem chi tiết phiếu
  const handleViewDetail = () => {
    router.push(`/user/nh%C3%A2n%20vi%C3%AAn%20ti%E1%BA%BFp%20nh%E1%BA%ADn/tra-cuu`)
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="flex justify-center mb-2">
        <div className="bg-white rounded-md p-4">
          <h1 className="text-lg font-semibold mb-2 text-center">Danh sách phiếu đăng ký</h1>
        </div>
      </div>

      <div className="bg-white rounded-md shadow p-4">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-4 py-2 w-[100px]">Mã phiếu</th>
              <th scope="col" className="px-4 py-2">Loại phiếu</th>
              <th scope="col" className="px-4 py-2">Trạng thái đăng ký</th>
            </tr>
          </thead>
          <tbody>
            {phieuDangKy?.map((phieu) => (
              <tr
                key={phieu.id}
                className="hover:bg-gray-50"
              >
                <td className="px-4 py-2 font-medium">{phieu.id}</td>
                <td className="px-4 py-2">{phieu.ma_loai_phieu_dang_ky}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${phieu.trang_thai === "Đã duyệt"
                        ? "bg-green-100 text-green-800"
                        : phieu.trang_thai === "Chờ duyệt"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                  >
                    {phieu.trang_thai}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <button
            onClick={handleBack}
            className="bg-[#79C0FF] hover:bg-blue-400 text-white font-medium px-4 py-2 rounded"
          >
            Quay lại
          </button>

          <button
            onClick={handleViewDetail}
            className="bg-[#79C0FF] hover:bg-blue-400 text-white font-medium px-4 py-2 rounded"
          >
            Xem chi tiết phiếu
          </button>
        </div>
      </div>
    </div>
  )
}
