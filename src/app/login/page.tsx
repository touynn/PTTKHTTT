"use client"

import { useState } from "react"

import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (username && password) {
      // router.push("/danh-sach-bai-thi");
      try {
        // Gửi dữ liệu username và password qua API
        const response = await fetch("../api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ten_dang_nhap: username, mat_khau: password }),
        });
  
        if (response.ok) {
          // Nếu đăng nhập thành công, chuyển hướng
          router.push("/danh-sach-bai-thi");
        } else {
          // Xử lý lỗi nếu đăng nhập thất bại
          alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">Log-in</h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex items-center">
            <label htmlFor="username" className="w-32 text-right mr-4 font-medium">
              Username:
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 p-2 border border-gray-300 bg-gray-200 rounded"
              required
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="password" className="w-32 text-right mr-4 font-medium">
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 p-2 border border-gray-300 bg-gray-200 rounded"
              required
            />
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition-colors"
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
