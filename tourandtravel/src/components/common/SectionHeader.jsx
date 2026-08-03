'use client';

import { motion } from 'framer-motion';

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {label && (
        <div className={`section-label justify-${centered ? 'center' : 'start'} ${light ? 'text-red-300' : 'text-nepal-red'}`}>
          <span className={`accent-line ${light ? 'bg-white/40' : ''}`} />
          {label}
          <span className={`accent-line ${light ? 'bg-white/40' : ''}`} />
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/75' : 'text-slate-500'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
