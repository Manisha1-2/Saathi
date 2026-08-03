'use client';

import { motion } from 'framer-motion';
import { FiShield, FiMapPin, FiUsers, FiHeadphones, FiAward, FiThumbsUp } from 'react-icons/fi';
import SectionHeader from '@/components/common/SectionHeader';

const reasons = [
  {
    icon: FiShield,
    title: 'Safety First',
    description: 'All treks include licensed, experienced guides, first aid kits, and emergency evacuation protocols. Your safety is our #1 priority.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: FiMapPin,
    title: 'Local Expertise',
    description: 'Born and raised in Nepal, our guides share authentic insights and hidden spots that no travel guide book will ever reveal.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: FiUsers,
    title: 'Small Group Sizes',
    description: 'We cap groups at 12 to ensure personalized attention, authentic connections, and minimal environmental impact.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: FiHeadphones,
    title: '24/7 Support',
    description: 'From trip planning to emergency assistance on the trail — our team is always just a call away, day or night.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: FiAward,
    title: 'Award-Winning',
    description: 'Recognized by TripAdvisor, Nepal Tourism Board, and National Geographic as a top Nepal travel operator since 2015.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: FiThumbsUp,
    title: 'Sustainable Travel',
    description: 'We follow Leave No Trace principles, hire local staff, and donate 2% of profits to Himalayan conservation projects.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section-padding bg-white" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label text-nepal-red mb-3">
                <span className="accent-line" />
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Nepal&apos;s Most Trusted Travel Partner
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                With 15+ years of crafting unforgettable Nepal experiences, we combine deep local knowledge, uncompromising safety standards, and a genuine passion for sharing this incredible country.
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap gap-3">
                {['Nepal Tourism Board', 'TAAN Member', 'TripAdvisor Award', 'Eco-Certified'].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs font-bold text-himalayan-blue bg-sky-light border border-himalayan-blue/20 px-3 py-1.5 rounded-full"
                  >
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow bg-white group"
                >
                  <div className={`w-11 h-11 rounded-xl ${reason.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`${reason.color} text-lg`} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{reason.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
