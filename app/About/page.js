"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center gap-8 text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
        About Me
      </h1>
      <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
        Hi! I'm Yaseen, a passionate developer building modern web experiences with Next.js, React, and Tailwind CSS. I love crafting beautiful, performant, and user-friendly interfaces. My journey in web development is driven by curiosity and a desire to create impactful digital products.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="px-4 py-2 rounded-full bg-cyan-900/40 text-cyan-300 font-semibold border border-cyan-400">Next.js</span>
        <span className="px-4 py-2 rounded-full bg-blue-900/40 text-blue-300 font-semibold border border-blue-400">React</span>
        <span className="px-4 py-2 rounded-full bg-purple-900/40 text-purple-300 font-semibold border border-purple-400">Tailwind CSS</span>
        <span className="px-4 py-2 rounded-full bg-green-900/40 text-green-300 font-semibold border border-green-400">JavaScript</span>
        <span className="px-4 py-2 rounded-full bg-yellow-900/40 text-yellow-300 font-semibold border border-yellow-400">UI/UX</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link href="/Contact" className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition-transform">Contact Me</Link>
        <Link href="/" className="px-6 py-2 rounded-lg border border-cyan-400 text-cyan-300 font-semibold bg-gray-900/60 hover:bg-cyan-400/20 transition-colors">Back to Home</Link>
        <Link href="/projects" className="px-6 py-2 rounded-lg border border-purple-400 text-purple-300 font-semibold bg-gray-900/60 hover:bg-purple-400/20 transition-colors">View Projects</Link>
      </div>
    </section>
  );
}
