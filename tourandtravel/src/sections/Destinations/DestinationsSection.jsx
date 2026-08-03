'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import DestinationCard from '@/components/cards/DestinationCard';
import SectionHeader from '@/components/common/SectionHeader';
import destinations from '@/data/destinations';

const CATEGORIES = ['All', 'Adventure', 'Cultural', 'Nature', 'Wildlife', 'Luxury'];

export default function DestinationsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchCategory = activeCategory === 'All' || d.category === activeCategory;
      const matchSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const featured = filtered.slice(0, 6);

  return (
    <section id="destinations" className="section-padding bg-mountain-white" aria-labelledby="destinations-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Explore Nepal"
          title="Top Destinations"
          subtitle="From Himalayan peaks to tropical jungles — discover Nepal's most breathtaking destinations waiting to be explored."
        />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Destination categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                id={`dest-cat-${cat.toLowerCase()}`}
                className={`explore-tab ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative sm:ml-auto">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destinations..."
              className="pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm outline-none focus:border-himalayan-blue transition-colors bg-white"
              aria-label="Search destinations"
              id="dest-search-input"
            />
          </div>
        </div>

        {/* Grid */}
        {featured.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg mb-4">No destinations found for &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="btn-outline-blue"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* View All CTA */}
        {filtered.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/destinations"
              id="destinations-view-all-btn"
              className="btn-outline-blue inline-flex items-center gap-2 px-8 py-3 text-base"
            >
              View All {destinations.length} Destinations
              <FiArrowRight />
            </Link>
          </motion.div>
        )}

        {destinations.length > 6 && filtered.length <= 6 && activeCategory === 'All' && !searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/destinations"
              className="btn-outline-blue inline-flex items-center gap-2 px-8 py-3 text-base"
            >
              View All {destinations.length} Destinations
              <FiArrowRight />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
