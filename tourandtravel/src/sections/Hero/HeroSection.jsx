'use client';

import heroSlides from "@/data/heroData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const stats = [
  { value: '500+', label: 'Destinations' },
  { value: '10K+', label: 'Happy Travelers' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HeroSection() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/destinations?q=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
      id="hero"
    >
      {/* Background Slider Container */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          /* 
             Key Fixes for Nav Icons:
             1. [&_.swiper-button-next] and [&_.swiper-button-prev] have z-[30] & pointer-events-auto
                so they float ABOVE all gradient overlays and main content.
             2. Styled arrow size, colors, and hover cursor feedback.
          */
          className="h-full w-full 
            [&_.swiper-button-next]:z-[30] [&_.swiper-button-prev]:z-[30] 
            [&_.swiper-button-next]:pointer-events-auto [&_.swiper-button-prev]:pointer-events-auto
            [&_.swiper-button-next]:text-white/80 [&_.swiper-button-prev]:text-white/80 
            [&_.swiper-button-next:hover]:text-white [&_.swiper-button-prev:hover]:text-white
            [&_.swiper-button-next:after]:text-3xl [&_.swiper-button-prev:after]:text-3xl
            [&_.swiper-pagination]:z-[30] [&_.swiper-pagination-bullet-active]:bg-white"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="h-full w-full">
              <div className="relative w-full h-full min-h-screen">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={slide.id === 1}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gradient Overlays (pointer-events-none prevents blocking clicks) */}
        <div className="absolute inset-0 bg-slate-900/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80 z-10 pointer-events-none" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Hero Main Content */}
      {/* Set pointer-events-none on parent grid wrapper, but keep input/buttons interactive */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 flex flex-col items-center text-center pointer-events-none">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center pointer-events-auto"
        >
          {/* Label */}
          <motion.div variants={item} className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-white/60" />
            <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Nepal&apos;s #1 Travel Company
            </span>
            <span className="h-px w-8 bg-white/60" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6 max-w-5xl tracking-tight"
          >
            Discover{' '}
            <span className="relative inline-block">
              Nepal
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-red-600 origin-left rounded-full"
              />
            </span>
            ,{' '}
            <br className="hidden sm:block" />
            The Land of Mountains
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-base sm:text-xl text-white/80 max-w-2xl leading-relaxed mb-8"
          >
            From the world&apos;s highest peaks to ancient temples and vibrant culture — experience Nepal like never before with our expert-guided tours.
          </motion.p>

          {/* Search Bar */}
          <motion.form
            variants={item}
            onSubmit={handleSearch}
            className="w-full max-w-xl mb-10"
          >
            <div className="flex bg-white/95 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl p-1.5">
              <div className="flex items-center gap-3 flex-1 px-3">
                <FaSearch className="text-slate-400 text-base shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search Nepal destinations..."
                  className="flex-1 bg-transparent outline-none text-slate-800 text-sm py-2 placeholder-slate-400 font-medium"
                  aria-label="Search destinations"
                  id="hero-search-input"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
                aria-label="Search"
              >
                Search
              </button>
            </div>
          </motion.form>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base px-7 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105"
              id="hero-explore-btn"
            >
              Explore Destinations
              <FiArrowRight />
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium text-base px-7 py-3.5 rounded-xl backdrop-blur-sm transition-all hover:scale-105"
              id="hero-book-btn"
            >
              Book Your Trip
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/70 font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase font-medium">Scroll</span>
        <FiChevronDown className="text-white/70 text-xl animate-bounce" />
      </motion.div>
    </section>
  );
}