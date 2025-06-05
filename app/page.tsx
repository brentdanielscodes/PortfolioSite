// app/page.tsx
"use client";
import Sidebar from "./components/Sidebar";
import AboutCard from "./components/AboutCard";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main
        className="flex-1 p-6 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://www.charleston-sc.gov/ImageRepository/Document?documentID=23032)' }}
      >
        <AboutCard />
        <Services />
      </main>
    </div>
  );
}
