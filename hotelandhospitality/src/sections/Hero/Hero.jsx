"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Saathi Grand Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/50 to-navy-950/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold-500/20 rounded-full opacity-30 animate-float" />
      <div className="absolute bottom-32 right-16 w-20 h-20 border border-gold-500/15 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container-hotel text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-gold-500 font-[family-name:var(--font-accent)] text-lg md:text-xl tracking-[0.35em] uppercase mb-4">
            Welcome to
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 leading-tight"
        >
          Saathi Grand
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-[family-name:var(--font-accent)] text-gold-300 text-lg md:text-xl lg:text-2xl tracking-wider mb-2 italic"
        >
          Hotel & Resort
        </motion.p>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '80px' }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-[1px] bg-gold-500 mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Where timeless elegance meets modern luxury. Experience world-class hospitality
          nestled in the heart of breathtaking natural beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/booking"
            className="px-8 py-4 bg-gold-500 text-navy-900 font-semibold tracking-wider text-sm uppercase
                       hover:bg-gold-400 transition-all duration-300 rounded-sm shadow-lg shadow-gold-500/20
                       hover:shadow-xl hover:shadow-gold-500/30"
          >
            Book Your Stay
          </Link>
          <Link
            href="/rooms"
            className="px-8 py-4 border-2 border-white/40 text-white font-medium tracking-wider text-sm uppercase
                       hover:bg-white hover:text-navy-900 transition-all duration-300 rounded-sm"
          >
            Explore Rooms
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <IoChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
