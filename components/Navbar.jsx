"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 shadow-md fixed top-0 left-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/DevCraftYaseenLogo.png" alt="DevCraftYaseen Logo" width={44} height={44} className="rounded-full border-2 border-cyan-400 shadow-lg bg-gray-800/60" />
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-tight">DevCraftYaseen</span>
      </Link>
      <ul className="flex gap-8 text-base font-medium text-gray-200">
        <li>
          <Link href="/" className="hover:text-cyan-400 transition-colors duration-200">Home</Link>
        </li>
        <li>
          <Link href="/About" className="hover:text-cyan-400 transition-colors duration-200">About</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-cyan-400 transition-colors duration-200">Projects</Link>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-cyan-400 transition-colors duration-200">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
