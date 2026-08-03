'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiClock, FiArrowRight, FiCalendar } from 'react-icons/fi';

export default function BlogCard({ blog, index = 0 }) {
  const { slug, title, excerpt, image, category, author, authorImage, date, readTime } = blog;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Category */}
        <div className="absolute top-3 left-3">
          <span className="bg-himalayan-blue text-white text-xs font-bold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <FiCalendar className="text-xs" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <FiClock className="text-xs" />
            {readTime}
          </span>
        </div>

        <h3 className="font-bold text-slate-900 text-base leading-snug mb-2.5 line-clamp-2 group-hover:text-himalayan-blue transition-colors">
          {title}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3 flex-1">{excerpt}</p>

        {/* Author + Link */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image src={authorImage} alt={author} fill className="object-cover" />
            </div>
            <span className="text-xs font-semibold text-slate-700">{author}</span>
          </div>
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-1.5 text-himalayan-blue font-semibold text-xs hover:gap-2.5 transition-all"
            aria-label={`Read article: ${title}`}
          >
            Read More
            <FiArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
