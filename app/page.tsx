"use client"
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Requerimientos } from "@/components/Requerimientos";
import { Integrantes } from "@/components/Integrantes";
import { Desarrollo } from "@/components/Desarrollo";

export default function Home() {

  return (
    <main className="flex flex-col items-center gap-16 py-16">

      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-5xl">Proyecto 2</h1>
        <ThemeSwitcher />
      </div>

      <Requerimientos />

      <Integrantes />

      <Desarrollo />
    </main>
  );
}
