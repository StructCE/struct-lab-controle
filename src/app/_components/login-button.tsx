"use client";
import { Button } from "@/components/ui/button";

import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";

export function LoginForm() {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="space-x-2 bg-[#EEEEEE] px-9 text-black hover:bg-gray-300"
    >
      <FcGoogle className="mr-4" /> Logar com Google
    </Button>
  );
}
