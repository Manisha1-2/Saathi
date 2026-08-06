"use client";

import { motion } from 'framer-motion';
import { IoStar } from 'react-icons/io5';

const TestimonialCard = ({ testimonial, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-cream-200 relative"
    >
      {/* Quote mark */}
      <div className="absolute top-4 right-6 text-6xl text-gold-100 font-[family-name:var(--font-heading)] leading-none select-none">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <IoStar key={i} className="text-gold-500 text-lg" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 leading-relaxed mb-6 relative z-10 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
          className="w-12 h-12 rounded-full object-cover border-2 border-gold-200"
        />
        <div>
          <h4 className="font-[family-name:var(--font-heading)] font-semibold text-navy-900 text-sm">
            {testimonial.name}
          </h4>
          <p className="text-gold-600 text-xs tracking-wide">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
