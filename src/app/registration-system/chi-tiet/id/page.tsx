"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react"

// Define the type of the data object
interface PhieuDangKy {
  id: string;
  trang_thai: string;
  loai_phieu_dang_ky: string;
  ngay_dang_ky: string;
  ho_va_ten: string;
  so_dien_thoai: string;
  email: string;
  dia_chi: string;
  ghi_chu: string;
}

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="grid grid-cols-2">
    <span className="text-gray-600">{label}:</span>
    <span className="font-medium">{value}</span>
  </div>
);

const UnsuccessfulPage = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto p-4 max-w-md">
      <div className="bg-white rounded-md shadow p-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-lg font-semibold text-center">Không có phiếu đăng ký phù hợp</h2>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full transition-colors"
            onClick={() => router.back()}
          >
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ChiTietPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id as string;
  const soDienThoai = Array.isArray(params.so_dien_thoai)
    ? params.so_dien_thoai[0]
    : params.so_dien_thoai as string;
  const router = useRouter();

  // Explicitly define the state type
  const [phieu, setPhieu] = useState<PhieuDangKy | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/api/laythongtin?id=${id}&soDienThoai=${soDienThoai}`
        );
        if (res.ok) {
          const data = await res.json();
          if (data.phieu) {
            setPhieu(data.phieu);
          } else {
            router.push("/registration-system/khong-thanh-cong");
          }
        } else {
          console.error("Không thể tải dữ liệu, mã lỗi:", res.status);
          router.push("/registration-system/khong-thanh-cong");
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        router.push("/registration-system/khong-thanh-cong");
      }
    };

    if (id && soDienThoai) {
      fetchData();
    }
  }, [id, soDienThoai, router]);

  const handleBack = () => {
    router.push("/registration-system/danh-sach");
  };

  const handleHome = () => {
    router.push("/");
  };

  if (!phieu) {
    return <UnsuccessfulPage />;
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-xl font-bold mb-4">Chi tiết phiếu đăng ký</h1>

      <div className="bg-white rounded-md shadow p-4">
        <div className="mb-4 pb-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Mã phiếu: {phieu.id}</h2>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                phieu.trang_thai === "Đã duyệt"
                  ? "bg-green-100 text-green-800"
                  : phieu.trang_thai === "Chờ duyệt"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {phieu.trang_thai}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <DetailRow label="Loại phiếu" value={phieu.loai_phieu_dang_ky} />
          <DetailRow label="Ngày đăng ký" value={phieu.ngay_dang_ky} />
          <DetailRow label="Họ và tên" value={phieu.ho_va_ten} />
          <DetailRow label="Số điện thoại" value={phieu.so_dien_thoai} />
          <DetailRow label="Email" value={phieu.email} />
          <DetailRow label="Địa chỉ" value={phieu.dia_chi} />
          <DetailRow label="Ghi chú" value={phieu.ghi_chu} />
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={handleBack}
            className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
          >
            Quay lại
          </button>

          {phieu.trang_thai === "Chờ duyệt" && (
            <div className="space-x-2">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded">
                Duyệt
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded">
                Từ chối
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
