'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiStar, FiArrowRight } from 'react-icons/fi';

export default function DestinationCard({ destination, index = 0 }) {
  const {
    slug,
    name,
    tagline,
    description,
    image,
    location,
    duration,
    rating,
    reviewCount,
    category,
    activities,
    price,
  } = destination;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100"
    >
      {/* Image */}
      <div className="relative h-56 img-zoom-container overflow-hidden">
        <Image
          src={image}
          alt={`${name} - ${tagline}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="badge badge-blue text-xs">{category}</span>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1 flex items-center gap-1">
          <FiStar className="text-amber-400 text-xs fill-amber-400" />
          <span className="text-xs font-bold text-slate-800">{rating}</span>
          <span className="text-xs text-slate-500">({reviewCount > 999 ? (reviewCount / 1000).toFixed(1) + 'k' : reviewCount})</span>
        </div>

        {/* Bottom info on image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-white text-xs">
            <FiMapPin className="text-xs" />
            <span className="font-medium">{location.split(',')[0]}</span>
          </div>
          <div className="flex items-center gap-1 text-white text-xs">
            <FiClock className="text-xs" />
            <span>{duration}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-bold text-lg text-slate-900 leading-tight mb-0.5">{name}</h3>
          <p className="text-sm font-medium text-himalayan-blue">{tagline}</p>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{description}</p>

        {/* Activities */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {activities.slice(0, 3).map((activity) => (
            <span key={activity} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
              {activity}
            </span>
          ))}
          {activities.length > 3 && (
            <span className="text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">
              +{activities.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div>
            <span className="text-xs text-slate-400">From</span>
            <div className="font-bold text-xl text-slate-900">
              ${price}
              <span className="text-xs font-normal text-slate-400 ml-1">/person</span>
            </div>
          </div>
          <Link
            href={`/destinations/${slug}`}
            className="flex items-center gap-2 bg-himalayan-blue hover:bg-himalayan-blue-dark text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-all hover:shadow-md group/btn"
            aria-label={`Explore ${name}`}
          >
            Explore
            <FiArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
