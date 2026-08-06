"use client";

import { motion } from 'framer-motion';

const SectionHeading = ({
  title,
  subtitle,
  label,
  align = 'center',
  light = false,
  className = '',
}) => {
  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col ${alignClass[align]} mb-12 md:mb-16 ${className}`}
    >
      {label && (
        <span className="text-gold-500 font-[family-name:var(--font-accent)] text-lg md:text-xl tracking-widest uppercase mb-3">
          {label}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-5" />
      {subtitle && (
        <p
          className={`max-w-2xl text-base md:text-lg leading-relaxed ${
            light ? 'text-cream-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
