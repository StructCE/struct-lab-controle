"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useSession } from "next-auth/react";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const userSession = useSession();

  if (!userSession.data?.user?.isAdmin) {
    return redirect("/");
  }

  return <>{children}</>;
}
