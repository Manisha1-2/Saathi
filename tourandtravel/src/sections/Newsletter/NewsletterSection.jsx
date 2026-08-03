'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiMail, FiArrowRight } from 'react-icons/fi';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubscribed(true);
  };

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Newsletter subscription"
      style={{ background: 'linear-gradient(135deg, #c8102e 0%, #9b0c22 60%, #6d0718 100%)' }}
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=60"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl mb-4">✉️</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Nepal Travel Inspiration
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive deals, hidden gem discoveries, packing tips, and seasonal trekking guides. No spam — only Nepal magic.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/20 backdrop-blur-sm text-white rounded-2xl px-8 py-6 inline-block"
            >
              <div className="text-3xl mb-2">🎉</div>
              <div className="font-bold text-xl">You&apos;re in!</div>
              <p className="text-white/80 text-sm mt-1">Check your inbox for a welcome gift from Nepal.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  id="newsletter-email-input"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-white/50 text-sm font-medium"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                id="newsletter-subscribe-btn"
                className="flex items-center justify-center gap-2 bg-himalayan-blue hover:bg-himalayan-blue-dark text-white font-bold px-6 py-3.5 rounded-xl transition-colors disabled:opacity-60 flex-shrink-0 text-sm"
              >
                {loading ? 'Subscribing...' : (
                  <>Subscribe <FiArrowRight /></>
                )}
              </button>
            </form>
          )}

          <p className="text-white/50 text-xs mt-4">
            Join 12,000+ travelers. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
