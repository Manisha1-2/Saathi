"use client";

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { HOTEL_STATS } from '@/constants';
import { IoShieldCheckmarkOutline, IoHeartOutline, IoDiamondOutline, IoLeafOutline } from 'react-icons/io5';

const values = [
  {
    icon: IoDiamondOutline,
    title: 'Luxury Experience',
    description: 'Every detail is crafted to provide an unparalleled luxury experience that exceeds expectations.',
  },
  {
    icon: IoHeartOutline,
    title: 'Warm Hospitality',
    description: 'Our team is dedicated to creating a warm, welcoming atmosphere that feels like a home away from home.',
  },
  {
    icon: IoShieldCheckmarkOutline,
    title: 'Trust & Safety',
    description: 'Your safety and privacy are paramount. We maintain the highest standards of security and hygiene.',
  },
  {
    icon: IoLeafOutline,
    title: 'Sustainability',
    description: 'We are committed to sustainable practices that preserve the natural beauty of our surroundings.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
            alt="About Saathi Grand"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/70" />
        </div>
        <div className="relative z-10 text-center container-hotel">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-500 font-[family-name:var(--font-accent)] text-lg tracking-widest uppercase mb-3 block"
          >
            Discover Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-cream-50">
        <div className="container-hotel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80"
                  alt="Hotel lobby"
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80"
                  alt="Pool area"
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <SectionHeading
                label="Our Heritage"
                title="A Legacy Built on Excellence"
                align="left"
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010 by the Shrestha family, Saathi Grand Hotel & Resort was born from a
                  vision to create a world-class hospitality destination in the heart of Pokhara, Nepal.
                  What began as a boutique property with 12 rooms has evolved into a premier luxury resort
                  with over 50 rooms and suites.
                </p>
                <p>
                  The name &ldquo;Saathi&rdquo; meaning &ldquo;companion&rdquo; in Nepali, reflects our core
                  philosophy — to be a trusted companion in every guest&apos;s journey, whether for business,
                  leisure, or celebration.
                </p>
                <p>
                  Over the past 15 years, we have welcomed guests from over 80 countries, hosted countless
                  weddings and corporate events, and earned numerous awards for hospitality excellence. Yet,
                  our greatest achievement remains the smiles on our guests&apos; faces.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-white">
        <div className="container-hotel">
          <SectionHeading
            label="What Drives Us"
            title="Our Mission & Values"
            subtitle="We believe that true luxury lies not just in elegant spaces, but in the warmth of genuine hospitality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-cream-50 rounded-lg border border-cream-200 hover:shadow-lg transition-all duration-500 group"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gold-50 flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-all duration-500">
                  <Icon className="text-gold-500 text-2xl group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-navy-900 font-semibold text-lg mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
            alt="Hotel"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>
        <div className="container-hotel relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {HOTEL_STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-gold-500 block">
                  {stat.number}{stat.suffix}
                </span>
                <span className="text-white/70 text-sm mt-2 block">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
