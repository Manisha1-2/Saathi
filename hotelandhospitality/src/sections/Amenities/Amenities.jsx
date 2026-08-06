"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import {
  MdPool,
  MdSpa,
  MdFitnessCenter,
  MdWifi,
  MdRestaurant,
  MdLocalBar,
  MdLocalParking,
  MdAir,
} from 'react-icons/md';

const amenities = [
  { icon: MdPool, label: 'Infinity Pool' },
  { icon: MdSpa, label: 'Luxury Spa' },
  { icon: MdFitnessCenter, label: 'Gym & Fitness' },
  { icon: MdWifi, label: 'Free WiFi' },
  { icon: MdRestaurant, label: 'Fine Dining' },
  { icon: MdLocalBar, label: 'Rooftop Bar' },
  { icon: MdLocalParking, label: 'Free Parking' },
  { icon: MdAir, label: 'Climate Control' },
];

const Amenities = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
          alt="Hotel rooftop"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/85" />
      </div>

      <div className="container-hotel relative z-10">
        <SectionHeading
          label="Amenities"
          title="Everything You Need"
          subtitle="Enjoy world-class amenities designed to make your stay comfortable and memorable."
          light
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {amenities.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col items-center gap-4 p-6 rounded-lg bg-white/5 border border-white/10
                         hover:bg-gold-500/10 hover:border-gold-500/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center
                              group-hover:bg-gold-500/20 transition-all duration-500">
                <Icon className="text-gold-500 text-3xl" />
              </div>
              <span className="text-white/80 text-sm font-medium tracking-wide text-center group-hover:text-gold-300 transition-colors duration-300">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
