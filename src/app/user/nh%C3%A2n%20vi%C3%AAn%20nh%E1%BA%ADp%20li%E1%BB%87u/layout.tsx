import type React from "react";
import ClientLayout from "@/components/ClientLayout";


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout permission="nhân viên nhập liệu">{children}</ClientLayout>
}
