"use client";

export default function Services() {
  return (
    <section id="services" className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-blue-600 mb-4">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start gap-4">
          <div className="text-blue-500 text-3xl">{`</>`}</div>
          <div>
            <h3 className="font-semibold">Web Development</h3>
            <p className="text-sm text-gray-600">
              Modern and mobile-ready websites that will help you reach your goals.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-blue-500 text-3xl">⚙️</div>
          <div>
            <h3 className="font-semibold">Backend Scripting</h3>
            <p className="text-sm text-gray-600">
              Automation, data processing, API integration, and backend logic tailored to project needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
