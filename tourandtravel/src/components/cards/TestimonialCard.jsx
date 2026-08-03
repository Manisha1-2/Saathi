'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar
          key={i}
          className={`text-sm ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
          style={{ fill: i < rating ? '#f59e0b' : 'none' }}
        />
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial, index = 0 }) {
  const { name, country, flag, avatar, tour, rating, date, review } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="testimonial-item w-80 sm:w-96 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      {/* Quote icon */}
      <FaQuoteLeft className="text-himalayan-blue/15 text-4xl mb-3" />

      {/* Rating */}
      <div className="mb-3">
        <StarRating rating={rating} />
      </div>

      {/* Review */}
      <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1 line-clamp-5">
        {review}
      </p>

      {/* Tour */}
      <div className="mb-4">
        <span className="text-xs font-bold text-himalayan-blue bg-sky-light px-3 py-1.5 rounded-full">
          ✈ {tour}
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-himalayan-blue/20">
          <Image
            src={avatar}
            alt={`${name} - testimonial`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-bold text-sm text-slate-900">{name}</div>
          <div className="text-xs text-slate-400 flex items-center gap-1">
            <span>{flag}</span>
            {country} · {date}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
