"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function ExamDetailsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const examCode = searchParams.get("code") || ""
  const [examDetails, setExamDetails] = useState<any>(null)

  useEffect(() => {
    const fetchExamDetails = async () => {
      if (examCode) {
        const response = await fetch("/api/exam_details", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ exam_code: examCode }),
        });
        const data = await response.json();
        setExamDetails(data.result?.[0]);
      }
    };
    fetchExamDetails();

  }, [examCode])

  useEffect(() => console.log(examDetails), [examDetails])

  const handleGoBack = () => {
    router.push("/danh-sach-bai-thi")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-md shadow-md p-6 max-w-2xl mx-auto">
        <h1 className="text-xl font-bold mb-6">Thông tin bài thi</h1>

        <div className="space-y-8">
          <h2 className="text-xl font-bold text-center">Thông Tin Kết quả và Chứng Chỉ</h2>

          <div className="space-y-6 mt-8">
            <div className="flex items-center">
              <label className="w-32 text-right mr-4 font-medium">Mã bài thi:</label>
              <div className="flex-1 p-2 border border-gray-300 bg-gray-200 rounded">{examCode}</div>
            </div>

            <div className="flex items-center">
              <label className="w-32 text-right mr-4 font-medium">Kết quả:</label>
              <div className="flex-1 p-2 border border-gray-300 bg-gray-200 rounded">{examDetails?.result || ""}</div>
            </div>

            <div className="flex items-center">
              <label className="w-32 text-right mr-4 font-medium">Số chứng chỉ:</label>
              <div className="flex-1 p-2 border border-gray-300 bg-gray-200 rounded">
                {examDetails?.certificatenumber || ""}
              </div>
            </div>

            <div className="flex items-center">
              <label className="w-32 text-right mr-4 font-medium">Ngày cấp:</label>
              <div className="flex-1 p-2 border border-gray-300 bg-gray-200 rounded">
                {
                  new Date(examDetails?.issuedate || "").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleGoBack}
              className="px-6 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition-colors"
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
