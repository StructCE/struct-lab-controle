import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export async function NavBar() {
  return (
    <div className="flex justify-around mt-10 h-24 items-start">
      <div className="flex items-center">
        <Image width={41} height={47} src="/foguete.png" alt="Foguete" />
        <h1 className="font-semibold text-xl ">Sistema de Controle</h1>
      </div>

      <div className="flex gap-5 items-center">
      <ul className="flex gap-5 text-base font-medium text-[#828282]">
        <Link href="#Inicio">Início</Link>
        <Link href="#Controle de Estoque">Controle de Estoque</Link>
        <Link href="#Historico">Histórico</Link>
        <Link href="#Usuarios">Usuários</Link>
      </ul>

      <Button className="bg-transparent text-red-500 hover:bg-transparent text-base gap-2">
        <LogOut />
        Sair
      </Button>
      </div>
    </div>
  );
}
