'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import BlogCard from '@/components/cards/BlogCard';
import SectionHeader from '@/components/common/SectionHeader';
import blogs from '@/data/blogs';

export default function BlogSection() {
  const featured = blogs.filter((b) => b.featured).slice(0, 3);

  return (
    <section id="blog" className="section-padding bg-white" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Travel Blog"
          title="Tips & Inspiration"
          subtitle="Expert travel advice, trekking guides, cultural insights, and Nepal stories from our seasoned team of travel writers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            id="blog-view-all-btn"
            className="btn-outline-blue inline-flex items-center gap-2 px-8 py-3 text-base"
          >
            Read All Articles
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
