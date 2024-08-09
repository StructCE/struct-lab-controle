import { redirect } from "next/navigation";
import React from "react";

export default function AdminLayout(children: React.ReactNode) {
  const userSession = undefined; // verificar se usuario ta logado e é admin
  if (!userSession.is_admin) {
    return redirect("/");
  }
  return <>{children}</>;
}
