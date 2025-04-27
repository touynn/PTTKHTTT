"use client"

import { AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UnsuccessfulPage() {
  const router = useRouter()

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
  )
}
