'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import PackageCard from '@/components/cards/PackageCard';
import SectionHeader from '@/components/common/SectionHeader';
import packages from '@/data/packages';

export default function PackagesSection() {
  const featured = packages.filter((p) => p.featured);

  return (
    <section id="packages" className="section-padding bg-slate-50" aria-labelledby="packages-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Tour Packages"
          title="Hand-Crafted Nepal Experiences"
          subtitle="Each package is expertly designed by local guides who know Nepal's hidden gems. Choose from treks, safaris, cultural tours, and luxury escapes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} featured={pkg.featured} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/packages"
            id="packages-view-all-btn"
            className="btn-outline-blue inline-flex items-center gap-2 px-8 py-3 text-base"
          >
            View All {packages.length} Packages
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
