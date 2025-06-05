"use client";
export default function AboutCard() {
  return (
    <section id="about" className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-bold text-blue-600 mb-2">About Me</h2>
      <p className="text-gray-700 mb-4">
        <strong>Hello! I&apos;m Brent Daniels.</strong> Full stack engineer from Lexington, South Carolina. I have rich
        experience in both frontend and backend development, and I&apos;m also skilled in WordPress. I am open to discussing employment opportunities and exciting projects.
      </p>
      <ul className="text-sm text-gray-600">
        <li><strong>Age:</strong> 21</li>
        <li><strong>Residence:</strong> Charleston, SC, USA</li>
        <li><strong>Freelance:</strong> Available</li>
        <li><strong>Address:</strong> South Carolina, USA</li>
      </ul>
    </section>
  );
}
