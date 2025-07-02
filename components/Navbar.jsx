"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleNav = () => setSidebarOpen((open) => !open);
  const handleClose = () => setSidebarOpen(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 shadow-md fixed top-0 left-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/DevCraftYaseenLogo.png" alt="DevCraftYaseen Logo" width={44} height={44} className="rounded-full border-2 border-cyan-400 shadow-lg bg-gray-800/60" />
        <span className="hidden sm:inline text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-tight">DevCraftYaseen</span>
      </Link>
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-base font-medium text-gray-200">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-cyan-400 transition-colors duration-200">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile Menu Icon */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-800/60 focus:outline-none"
        onClick={handleNav}
        aria-label="Open menu"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-cyan-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 md:hidden" onClick={handleClose}></div>
      )}
      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 min-h-dvh w-64 bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 md:hidden ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <Image src="/DevCraftYaseenLogo.png" alt="DevCraftYaseen Logo" width={40} height={40} className="rounded-full border-2 border-cyan-400 bg-gray-800/60" />
          <button onClick={handleClose} aria-label="Close menu" className="p-2 ml-2 rounded-lg hover:bg-gray-800/60">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-cyan-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-6 mt-[-5px] px-8 bg-gray-900">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 text-lg font-semibold text-gray-200 hover:text-cyan-400 transition-colors"
                onClick={handleClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
}
