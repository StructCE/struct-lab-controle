"use strict";
import Image from "next/image";
import Link from "next/link";
import SignOutButton from "./sign-out-button";

export async function NavBar() {
  return (
    <div className="mt-10 flex h-24 items-start justify-around">
      <div className="flex items-center">
        <Image width={41} height={47} src="/foguete.png" alt="Foguete" />
        <h1 className="text-xl font-semibold ">Sistema de Controle</h1>
      </div>

      <div className="flex items-center gap-5">
        <ul className="flex gap-5 text-base font-medium text-[#828282]">
          <Link href="#Inicio">Início</Link>
          <Link href="#Controle de Estoque">Controle de Estoque</Link>
          <Link href="/historico">Histórico</Link>
          <Link href="#Usuarios">Usuários</Link>
        </ul>
        <SignOutButton />
      </div>
    </div>
  );
}
