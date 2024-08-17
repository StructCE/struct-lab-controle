"use client";
import CldImage from "@/components/app/cldImage";
import { LoginForm } from "../_components/login-button";

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="relative h-36 w-full bg-gray-300 lg:h-auto lg:w-1/2">
          <CldImage
            alt="background"
            src="cld-sample-5"
            fill
            className="object-cover"
          />
          <div className="absolute left-0 top-12 flex space-x-4 rounded-r bg-black bg-opacity-60 p-2 text-2xl font-bold text-white lg:top-8">
            <div>
              <CldImage
                alt="background"
                src="cld-sample-5"
                width="50"
                height="50"
              />
            </div>
            <div>Nome da Empresa</div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center bg-white p-4">
          <div className="pb-10 text-2xl font-bold">Entre na sua conta</div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
