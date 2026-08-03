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
import { FiArrowRight, FiPlay, FiChevronDown } from 'react-icons/fi';
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
      {/* Background Image */}
    {/* Background Slider */}
<div className="absolute inset-0">

 <Swiper
  modules={[Autoplay, Pagination, Navigation]}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
 navigation={{
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
}}

  loop
  className="h-screen w-full"
>

    {heroSlides.map((slide) => (

<SwiperSlide key={slide.id} className="h-screen">

    <div className="relative w-full h-screen">

          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={slide.id === 1}
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
          />

        </div>

      </SwiperSlide>
    ))}
<div className="swiper-button-prev !text-white"></div>
<div className="swiper-button-next !text-white"></div>
  </Swiper>


  {/* Gradient overlays */}
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/40 to-slate-900/80 z-10 pointer-events-none" />

<div className="absolute inset-0 bg-gradient-to-r from-himalayan-blue/20 to-transparent z-10 pointer-events-none" />
</div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Label */}
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-white/50" />
            <span className="text-white/80 text-sm font-semibold tracking-widest uppercase">
              Nepal&apos;s #1 Travel Company
            </span>
            <span className="h-px w-8 bg-white/50" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 max-w-5xl"
          >
            Discover{' '}
            <span className="relative inline-block">
              Nepal
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-nepal-red origin-left rounded-full"
              />
            </span>
            ,{' '}
            <br className="hidden sm:block" />
            The Land of Mountains
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed mb-10"
          >
            From the world&apos;s highest peaks to ancient temples and vibrant culture — experience Nepal like never before with our expert-guided tours.
          </motion.p>

          {/* Search bar */}
          <motion.form
            variants={item}
            onSubmit={handleSearch}
            className="w-full max-w-xl mb-8"
          >
            <div className="flex bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl p-1.5">
              <div className="flex items-center gap-2 flex-1 px-3">
                <FaSearch className="text-slate-400 text-sm shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search Nepal destinations..."
                  className="flex-1 bg-transparent outline-none text-slate-800 text-sm py-2 placeholder-slate-400"
                  aria-label="Search destinations"
                  id="hero-search-input"
                />
              </div>
              <button
                type="submit"
                className="bg-himalayan-blue hover:bg-himalayan-blue-dark text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm"
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
              className="btn-primary text-base px-7 py-3.5 rounded-xl shadow-lg shadow-himalayan-blue/30"
              id="hero-explore-btn"
            >
              Explore Destinations
              <FiArrowRight className="ml-1" />
            </Link>
            <Link
              href="/booking"
              className="btn-secondary text-base px-7 py-3.5 rounded-xl"
              id="hero-book-btn"
            >
              Book Your Trip
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/60 font-medium tracking-wide">{stat.label}</div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator z-10"
        aria-hidden="true"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <FiChevronDown className="text-white/60 text-xl" />
      </motion.div>
    </section>
  );
}
