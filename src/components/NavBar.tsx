'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    router.push('/');
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white shadow-md">
      <Image src="/placeholder.png" width={120} height={60} alt="Company Logo" priority />

      <div className="flex space-x-4 items-center">
        {/* Placeholder for future nav items */}
        {/* <a href="/dashboard" className="hover:underline">Dashboard</a> */}

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
        >
          Đăng xuất
        </button>
      </div>
    </nav>
  );
}
