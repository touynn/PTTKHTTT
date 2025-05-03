"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="hidden">
      <ul className="flex space-x-4">
        <li>
          <Link href="/danh-sach" className={pathname === "/danh-sach" ? "font-bold" : ""}>
            Danh sách phiếu đăng ký
          </Link>
        </li>
        <li>
          <Link href="/chua-nhap-du" className={pathname === "/chua-nhap-du" ? "font-bold" : ""}>
            Chưa nhập đủ thông
          </Link>
        </li>
        <li>
          <Link href="/tra-cuu" className={pathname === "/tra-cuu" ? "font-bold" : ""}>
            Tra cứu phiếu đăng ký
          </Link>
        </li>
        <li>
          <Link href="/chi-tiet" className={pathname === "/chi-tiet" ? "font-bold" : ""}>
            Chi tiết phiếu đăng ký
          </Link>
        </li>
        <li>
          <Link href="/khong-thanh-cong" className={pathname === "/khong-thanh-cong" ? "font-bold" : ""}>
            Không thành công
          </Link>
        </li>
      </ul>
    </nav>
  )
}
