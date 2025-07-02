"use client"
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="w-full py-6 px-4 text-center text-xs text-gray-300 opacity-90 border-t border-gray-800 bg-gray-900/80 flex flex-col items-center gap-3">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-cyan-400 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all w-64"
        />
        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
        >
          Subscribe
        </button>
      </form>
      {submitted && (
        <span className="text-cyan-400 text-sm mt-1 animate-fade-in">Thank you for subscribing!</span>
      )}
      <div className="mt-2">&copy; {new Date().getFullYear()} My Portfolio</div>
    </footer>
  );
}
