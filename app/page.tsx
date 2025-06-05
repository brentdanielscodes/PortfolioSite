"use client";
import Head from "next/head";
import Sidebar from "./components/Sidebar";
import AboutCard from "./components/AboutCard";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>BD Portfolio</title>
        <meta name="description" content="Portfolio of Brent Daniels, Full Stack Engineer" />
      </Head>
      <div className="flex min-h-screen">
        <Sidebar />
        <main
          className="flex-1 p-6 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.charleston-sc.gov/ImageRepository/Document?documentID=23032)",
          }}
        >
          <AboutCard />
          <Services />
        </main>
      </div>
    </>
  );
}
