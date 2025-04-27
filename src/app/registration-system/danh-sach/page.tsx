"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

// Dữ liệu mẫu
const sampleData = [
  { id: "100", loaiPhieu: "Đăng ký mới", trangThai: "Đã duyệt" },
  { id: "102", loaiPhieu: "Gia hạn", trangThai: "Chờ duyệt" },
  { id: "106", loaiPhieu: "Đăng ký mới", trangThai: "Từ chối" },
  { id: "110", loaiPhieu: "Chuyển đổi", trangThai: "Đã duyệt" },
  { id: "105", loaiPhieu: "Gia hạn", trangThai: "Chờ duyệt" },
]

export default function DanhSachPage() {
  const router = useRouter()
  const [phieuDangKy] = useState(sampleData)

  // Quay lại trang chủ
  const handleBack = () => {
    router.push("/")
  }

  // Xem chi tiết phiếu
  const handleViewDetail = () => {
    router.push(`/registration-system/tra-cuu`)
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
            {phieuDangKy.map((phieu) => (
              <tr
                key={phieu.id}
                className="hover:bg-gray-50"
              >
                <td className="px-4 py-2 font-medium">{phieu.id}</td>
                <td className="px-4 py-2">{phieu.loaiPhieu}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      phieu.trangThai === "Đã duyệt"
                        ? "bg-green-100 text-green-800"
                        : phieu.trangThai === "Chờ duyệt"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {phieu.trangThai}
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
