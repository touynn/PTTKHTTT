import { redirect } from "next/navigation"

export default function ChuyenHuongPage() {
  redirect("/danh-sach")

  // This part won't be executed due to the redirect
  return null
}
