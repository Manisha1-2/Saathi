"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import { HOTEL_STATS } from '../../constants';

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const AboutHotel = () => {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-hotel">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80"
                  alt="Hotel lobby"
                  loading="lazy"
                  className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80"
                  alt="Pool area"
                  loading="lazy"
                  className="w-full h-36 md:h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80"
                  alt="Hotel entrance"
                  loading="lazy"
                  className="w-full h-72 md:h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-4 md:right-4 bg-gold-500 text-navy-900 px-6 py-4 rounded-lg shadow-xl z-10">
              <div className="text-center">
                <span className="font-[family-name:var(--font-heading)] text-3xl font-bold block">15+</span>
                <span className="text-xs tracking-wider uppercase font-medium">Years of Excellence</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SectionHeading
              label="Our Story"
              title="A Legacy of Luxury & Hospitality"
              subtitle=""
              align="left"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Established in 2010, Saathi Grand Hotel & Resort has been a beacon of luxury
                hospitality in the heart of Pokhara. Nestled against the backdrop of the majestic
                Annapurna range and the serene Phewa Lake, our hotel offers an experience that
                blends natural beauty with unparalleled comfort.
              </p>
              <p>
                Every corner of Saathi Grand tells a story of dedication to excellence. From our
                hand-picked team of hospitality professionals to our meticulously designed
                interiors, we ensure that every guest feels like royalty from the moment they
                arrive.
              </p>
              <p>
                Our mission is simple: to create lasting memories through exceptional service,
                world-class dining, and an atmosphere that celebrates the best of Nepalese
                culture and international luxury.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-10 border-t border-cream-300">
              {HOTEL_STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <span className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-navy-900 block">
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm text-gray-500 mt-1 block">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHotel;
