"use client";

import { motion } from 'framer-motion';

const MenuCard = ({ item, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-200"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
        <div className="absolute bottom-3 right-3 bg-gold-500 text-navy-900 px-3 py-1 rounded-sm text-sm font-semibold">
          ${item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-navy-900">
            {item.name}
          </h3>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <span className="inline-block mt-3 text-xs text-gold-600 bg-gold-50 px-3 py-1 rounded-full tracking-wide">
          {item.category}
        </span>
      </div>
    </motion.div>
  );
};

export default MenuCard;
