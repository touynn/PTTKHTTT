"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface SearchData {
  maPhieu: string
}

export default function TraCuuPage() {
  const [searchData, setSearchData] = useState<SearchData>({
    maPhieu: ""
  })

  const router = useRouter() // <--- THÊM dòng này

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Chuyển hướng sang trang chi tiết
    const { maPhieu } = searchData

    if (!searchData.maPhieu.trim()) {
      alert("Chưa nhập đủ thông tin")
      return
    }


    router.push(`/user/nh%C3%A2n%20vi%C3%AAn%20ti%E1%BA%BFp%20nh%E1%BA%ADn/chi-tiet/id?maPhieu=${encodeURIComponent(maPhieu)}`)
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="bg-white rounded-md shadow p-4">
        <h2 className="text-lg font-semibold mb-4 text-center">Tra cứu phiếu đăng ký</h2>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex items-center">
            <span className="w-32">Mã phiếu đăng ký:</span>
            <div className="flex-1">
              <input
                type="text"
                name="maPhieu"
                value={searchData.maPhieu}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập mã phiếu đăng ký"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded w-full"
          >
            Tìm kiếm
          </button>
        </form>
      </div>
    </div>
  )
}
