"use client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <Button
      onClick={() => signOut()}
      className="gap-2 bg-transparent text-base text-red-500 hover:bg-transparent"
    >
      <LogOut />
      Sair
    </Button>
  );
}
