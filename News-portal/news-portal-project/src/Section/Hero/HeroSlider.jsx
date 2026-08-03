"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import heroData from "@/data/slider";

export default function HeroSlider({ children }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-150 overflow-hidden">
      {/* Images */}
      {heroData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Slider Content */}
      {/* Slider Content */}
      {/* Slider Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="max-w-2xl text-left">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full mb-4">
              Breaking News
            </span>

            <h1 className="text-5xl font-bold text-white mb-4">
              Latest News Updates From Around The World
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl">
              Stay informed with breaking news, politics, technology, sports and
              global updates from NewsPulse.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          setCurrent(current === 0 ? heroData.length - 1 : current - 1)
        }
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-4 rounded-full text-white transition"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() =>
          setCurrent(current === heroData.length - 1 ? 0 : current + 1)
        }
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-4 rounded-full text-white transition"
      >
        <FaChevronRight />
      </button>
    </section>
  );
}
