"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoPeopleOutline, IoResizeOutline, IoBedOutline } from 'react-icons/io5';
import Button from '../ui/Button';

const RoomCard = ({ room, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={room.thumbnail}
          alt={room.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />

        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-gold-500 text-navy-900 px-4 py-1.5 rounded-sm">
          <span className="font-semibold text-lg">{room.currency}{room.price}</span>
          <span className="text-xs ml-1">/night</span>
        </div>

        {/* Discount */}
        {room.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-sm font-medium">
            {Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-navy-900 mb-1">
          {room.name}
        </h3>
        <p className="text-gold-600 font-[family-name:var(--font-accent)] text-sm tracking-wide mb-3 italic">
          {room.tagline}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {room.shortDescription}
        </p>

        {/* Room info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-5 pb-5 border-b border-cream-300">
          <div className="flex items-center gap-1.5">
            <IoResizeOutline className="text-gold-500" />
            <span>{room.size}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <IoBedOutline className="text-gold-500" />
            <span>{room.bedType}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <IoPeopleOutline className="text-gold-500" />
            <span>{room.capacity.adults + room.capacity.children}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link href={`/rooms/${room.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full text-sm">
              View Details
            </Button>
          </Link>
          <Link href={`/booking?room=${room.id}`} className="flex-1">
            <Button variant="primary" size="sm" className="w-full text-sm">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
