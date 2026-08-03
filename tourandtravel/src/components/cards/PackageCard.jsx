'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiStar, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { FaMountain } from 'react-icons/fa';

const difficultyColors = {
  Easy: 'badge-green',
  Moderate: 'badge-gold',
  'Moderate–Challenging': 'badge-gold',
  Challenging: 'badge-red',
};

export default function PackageCard({ packageItem, pkg, index = 0, featured = false }) {
  const itemData = packageItem || pkg || {};
  const {
    slug = '',
    name = '',
    category = '',
    difficulty = 'Easy',
    duration = '',
    groupSize = '',
    image = '',
    price = 0,
    originalPrice = 0,
    rating = 5.0,
    reviewCount = 0,
    description = '',
    highlights = [],
  } = itemData;


  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group bg-white rounded-2xl overflow-hidden border flex flex-col transition-all duration-300 hover:shadow-xl ${
        featured ? 'border-himalayan-blue/30 shadow-md' : 'border-slate-100 shadow-sm'
      }`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={`${name} tour package`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-nepal-red text-white text-xs font-bold px-2.5 py-1 rounded-lg">
            SAVE {discount}%
          </div>
        )}

        {/* Featured */}
        {featured && (
          <div className="absolute top-3 right-3 bg-golden text-amber-900 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
            <FaMountain className="text-[10px]" /> Popular
          </div>
        )}

        {/* Rating on image */}
        <div className="absolute bottom-3 right-3 bg-white/95 rounded-lg px-2.5 py-1 flex items-center gap-1.5">
          <FiStar className="text-amber-400 text-xs" />
          <span className="text-xs font-bold text-slate-800">{rating}</span>
          <span className="text-xs text-slate-500">({reviewCount})</span>
        </div>

        {/* Duration & Group */}
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1">
            <FiClock className="text-xs" /> {duration}
          </span>
          <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1">
            <FiUsers className="text-xs" /> {groupSize}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category + Difficulty */}
        <div className="flex items-center gap-2 mb-3">
          <span className="badge badge-blue">{category}</span>
          <span className={`badge ${difficultyColors[difficulty] || 'badge-blue'}`}>{difficulty}</span>
        </div>

        <h3 className="font-bold text-lg text-slate-900 leading-snug mb-2">{name}</h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{description}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-slate-600">
              <FiCheckCircle className="text-green-500 text-sm flex-shrink-0 mt-0.5" />
              {h}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl text-slate-900">${price}</span>
              {originalPrice > price && (
                <span className="text-sm text-slate-400 line-through">${originalPrice}</span>
              )}
            </div>
            <span className="text-xs text-slate-400">per person</span>
          </div>
          <Link
            href={`/booking?package=${slug}`}
            className="flex items-center gap-2 bg-nepal-red hover:bg-nepal-red-dark text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-all hover:shadow-md group/btn"
            aria-label={`Book ${name}`}
          >
            Book Now
            <FiArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
