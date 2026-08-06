"use client";

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import RoomCard from '@/components/cards/RoomCard';
import { rooms } from '@/data/rooms';

export default function RoomsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80"
            alt="Our Rooms"
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
            Luxury Accommodations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Rooms & Suites
          </motion.h1>
        </div>
      </section>

      {/* Rooms listing */}
      <section className="section-padding bg-cream-50">
        <div className="container-hotel">
          <SectionHeading
            label="Choose Your Room"
            title="Find Your Perfect Stay"
            subtitle="From elegant deluxe rooms to our magnificent presidential suite, every space is designed for ultimate comfort."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {rooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
