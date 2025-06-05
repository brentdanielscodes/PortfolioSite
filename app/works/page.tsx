// app/works/page.tsx
"use client";
import Image from 'next/image';
import { useState } from 'react';

const images = [
  { src: '/images/ColorPicker.png', alt: 'Weather Dashboard' },
  { src: '/images/WeatherProject.png', alt: 'Color Picker Tool' },
  { src: '/images/robot.png', alt: 'Robot-Invader Game' }
];

export default function WorksGallery() {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 p-8">
      <h1 className="text-2xl font-bold text-white mb-6">Project Gallery</h1>
      <div className="relative w-full max-w-xl rounded overflow-hidden shadow-lg bg-white">
        <Image
          src={images[index].src}
          alt={images[index].alt}
          width={800}
          height={500}
          className="w-full object-cover"
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button onClick={prevImage} className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700">❮</button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button onClick={nextImage} className="bg-blue-600 text-white p-2 rounded-l hover:bg-blue-700">❯</button>
        </div>
      </div>
      <p className="mt-4 text-white font-medium">{images[index].alt}</p>
    </div>
  );
}