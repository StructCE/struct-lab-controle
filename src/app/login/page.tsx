import { LoginForm } from "@/app/_components/login-forms";
import CldImage from "@/components/app/cldImage";

export default function Login() {
  return (
    <div className="mx-auto flex items-center justify-center">
      <div className="flex h-svh w-full items-center justify-center bg-gray-300">
        <CldImage
          alt={"socorro"}
          src={"cld-sample-5"}
          width={"500"}
          height={"500"}
        />
      </div>
      <div className="flex h-svh w-full flex-col items-center justify-center bg-white">
        <div className="pb-20 text-2xl font-bold">Entre na sua conta</div>
        <LoginForm />
      </div>
    </div>
  );
}
