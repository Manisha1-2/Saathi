'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import TestimonialCard from '@/components/cards/TestimonialCard';
import SectionHeader from '@/components/common/SectionHeader';
import testimonials from '@/data/testimonials';

export default function TestimonialsSection() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    const amount = 400;
    trackRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="section-padding bg-mountain-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <SectionHeader
            label="Testimonials"
            title="What Travelers Say"
            subtitle="Real stories from real adventurers who explored Nepal with us."
            centered={false}
          />

          {/* Navigation Buttons */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => scroll(-1)}
              className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-himalayan-blue hover:text-himalayan-blue transition-colors"
              aria-label="Previous testimonials"
              id="testimonials-prev-btn"
            >
              <FiChevronLeft className="text-lg" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-himalayan-blue hover:text-himalayan-blue transition-colors"
              aria-label="Next testimonials"
              id="testimonials-next-btn"
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Scrollable track */}
        <div ref={trackRef} className="testimonial-track pb-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>

        {/* Overall rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
        >
          <div className="text-center">
            <div className="text-5xl font-black text-slate-900 leading-none">4.9</div>
            <div className="flex justify-center mt-1 mb-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-amber-400 text-lg">★</span>
              ))}
            </div>
            <div className="text-xs text-slate-400">Overall Rating</div>
          </div>
          <div className="h-12 w-px bg-slate-200 hidden sm:block" />
          <div className="flex gap-8 sm:gap-12">
            {[
              { label: 'TripAdvisor', value: '4.9/5', logo: '🏆' },
              { label: 'Google Reviews', value: '4.8/5', logo: '⭐' },
              { label: 'Facebook', value: '4.9/5', logo: '👍' },
            ].map((r) => (
              <div key={r.label} className="text-center">
                <div className="text-xl mb-0.5">{r.logo}</div>
                <div className="font-bold text-slate-900 text-sm">{r.value}</div>
                <div className="text-xs text-slate-400">{r.label}</div>
              </div>
            ))}
          </div>
          <div className="h-12 w-px bg-slate-200 hidden sm:block" />
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">5,000+</div>
            <div className="text-xs text-slate-400 mt-0.5">Verified Reviews</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
