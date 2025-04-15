"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ExamListPage() {
  const [exams, setExams] = useState<any[]>([]);
  const [dateFilter, setDateFilter] = useState("");
  const [roomFilter, setRoomFilter] = useState("");
  // New states to hold applied filters.
  const [appliedDateFilter, setAppliedDateFilter] = useState("")
  const [appliedRoomFilter, setAppliedRoomFilter] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter()

  // Fetch exams data from API
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await fetch("../api/exams");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setExams(data.exams);
      } catch (error) {
        console.error("Failed to fetch exams:", error);
      }
    };
    fetchExams();
  }, []);

  // Use applied filters for filtering the exams.
  const filteredExams = exams.filter((exam) => {
    const matchesDate = !appliedDateFilter || exam.date.includes(appliedDateFilter)
    const matchesRoom = !appliedRoomFilter || exam.room.includes(appliedRoomFilter)
    return matchesDate && matchesRoom
  })

  // Pagination logic: Define exams per page and compute paginated exams.
  const examsPerPage = 100;
  const totalPages = Math.ceil(filteredExams.length / examsPerPage);
  const paginatedExams = filteredExams.slice(
    (currentPage - 1) * examsPerPage,
    currentPage * examsPerPage
  );

  const handleFilter = () => {
    // Update the applied filters on click, then reset to the first page.
    setAppliedDateFilter(dateFilter)
    setAppliedRoomFilter(roomFilter)
    setCurrentPage(1)
  }
  
  const handleRowClick = (examCode: string) => {
    router.push(`/thong-tin-bai-thi?code=${examCode}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-md shadow-md p-6 max-w-4xl mx-auto">
        <h1 className="text-xl font-bold mb-2">Danh sách bài thi</h1>
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-xl font-bold text-center mb-4">DANH SÁCH BÀI THI</h2>
          <div className="flex justify-end mb-4">
            <p className="text-sm">Trang {currentPage}/{totalPages || 1}</p>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 px-4 text-left">Ngày thi</th>
                <th className="py-2 px-4 text-left">Mã bài thi</th>
                <th className="py-2 px-4 text-left">Phòng thi</th>
                <th className="py-2 px-4 text-left">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {paginatedExams.map((exam, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleRowClick(exam.code)}
                >
                  <td className="py-4 px-4">{exam.date}</td>
                  <td className="py-4 px-4">{exam.code}</td>
                  <td className="py-4 px-4">{exam.room}</td>
                  <td className="py-4 px-4">{exam.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4 space-x-2">
            <button
              className="p-1 border border-gray-300 rounded"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              className="p-1 border border-gray-300 rounded"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center mt-4 space-x-2">
            <div className="flex items-center">
              <label htmlFor="dateFilter" className="mr-2">Ngày thi:</label>
              <input
                id="dateFilter"
                type="text"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="p-2 border border-gray-300 bg-gray-200 rounded w-40"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="roomFilter" className="mr-2">Phòng thi:</label>
              <input
                id="roomFilter"
                type="text"
                value={roomFilter}
                onChange={(e) => setRoomFilter(e.target.value)}
                className="p-2 border border-gray-300 bg-gray-200 rounded w-40"
              />
            </div>
            <button
              onClick={handleFilter}
              className="px-4 py-2 bg-yellow-300 rounded hover:bg-yellow-400 transition-colors"
            >
              Lọc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
