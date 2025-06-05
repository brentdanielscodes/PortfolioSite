"use client";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-300 to-pink-200 flex items-center justify-center p-8">
      <iframe
        src="/brent_resume.pdf"
        className="w-full h-screen rounded-xl shadow-lg border"
      />
    </div>
  );
}
