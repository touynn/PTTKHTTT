"use client"; // using App Router

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
// import { useRouter } from "next/router"; // for Pages Router

export function RedirectToSpecificUser(pn: string, router: AppRouterInstance) {
  const upn = encodeURIComponent(pn.toLowerCase());

  router.push(`/user/${upn}`);
}
