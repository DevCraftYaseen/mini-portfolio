"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="flex flex-col items-center gap-8 text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
        Contact Me
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
        Have a question, project, or just want to say hi? Fill out the form below and I'll get back to you soon!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md bg-gray-900/80 p-8 rounded-2xl border border-gray-800 shadow-lg">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-cyan-400 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-cyan-400 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-cyan-400 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
        >
          Send Message
        </button>
        {submitted && (
          <span className="text-cyan-400 text-sm mt-2 animate-fade-in">Thank you for reaching out!</span>
        )}
      </form>
      <Link href="/" className="px-6 py-2 rounded-lg border border-cyan-400 text-cyan-300 font-semibold bg-gray-900/60 hover:bg-cyan-400/20 transition-colors mt-2">Back to Home</Link>
    </section>
  );
}
