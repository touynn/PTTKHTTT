// app/users/page.tsx (Example Server Component)
import { redirect } from "next/navigation";
export default async function Page() {
  redirect('/login');
}