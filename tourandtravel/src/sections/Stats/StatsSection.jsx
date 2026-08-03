'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Destinations Covered', description: 'From Himalayas to Terai' },
  { value: 10000, suffix: '+', label: 'Happy Travelers', description: 'From 80+ countries' },
  { value: 15, suffix: '+', label: 'Years Experience', description: 'Trusted since 2009' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate', description: 'Based on 5,000+ reviews' },
];

function CountUp({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Company statistics"
      style={{
        background: 'linear-gradient(135deg, #0f2d5a 0%, #1a4b8c 50%, #2d6cc7 100%)',
      }}
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <svg viewBox="0 0 1440 120" className="w-full" fill="white">
          <path d="M0,80 L120,40 L240,70 L360,20 L480,60 L600,10 L720,50 L840,0 L960,40 L1080,15 L1200,45 L1320,25 L1440,55 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 leading-none">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-base sm:text-lg font-bold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-white/55">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
