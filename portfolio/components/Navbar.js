"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md sticky top-0 z-50">
      <nav className="flex justify-center items-center space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/sobre" className="hover:underline">Sobre</Link>
        <Link href="/experiencia-academica" className="hover:underline">Acadêmico</Link>
        <Link href="/experiencia-profissional" className="hover:underline">Profissional</Link>
        <Link href="/projetos" className="hover:underline">Projetos</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
