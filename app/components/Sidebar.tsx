// app/components/Sidebar.tsx
"use client";
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white p-4 shadow-lg">
      <Image
        src="/images/brent_cali.jpeg"
        alt="Brent Daniels"
        width={120}
        height={120}
        className="rounded-full mx-auto"
      />
      <h1 className="text-center text-xl font-semibold mt-4">Brent Daniels</h1>
      <p className="text-center text-blue-600">Web/Backend Developer</p>
      <div className="flex justify-center gap-3 mt-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xl">🐦</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xl">💻</a>
      </div>
      <nav className="mt-6 space-y-2">
        <a className="block text-gray-700 bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 transition-colors duration-200 rounded px-3 py-2 shadow hover:shadow-md" href="#about">About</a>
        <a className="block text-gray-700 bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 transition-colors duration-200 rounded px-3 py-2 shadow hover:shadow-md" href="/resume">Resume</a>
        <a className="block text-gray-700 bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 transition-colors duration-200 rounded px-3 py-2 shadow hover:shadow-md" href="/works">Works</a>
      </nav>
      <div className="mt-6">
        <a
          href="/brent_resume.pdf"
          download
          className="block text-center w-full bg-blue-500 text-white py-2 rounded mb-2 hover:bg-blue-600"
        >
          Download CV
        </a>
        <a
          href="mailto:brentwdc@example.com"
          className="block text-center w-full border border-blue-500 text-blue-500 py-2 rounded hover:bg-blue-50"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
