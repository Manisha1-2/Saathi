'use client';

import Link from 'next/link';
import { FaMountain, FaFacebook, FaInstagram, FaYoutube, FaTripadvisor } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

const footerLinks = {
  destinations: [
    { label: 'Kathmandu', href: '/destinations/kathmandu' },
    { label: 'Pokhara', href: '/destinations/pokhara' },
    { label: 'Everest Region', href: '/destinations/everest-region' },
    { label: 'Chitwan', href: '/destinations/chitwan' },
    { label: 'Mustang', href: '/destinations/mustang' },
    { label: 'Lumbini', href: '/destinations/lumbini' },
  ],
  packages: [
    { label: 'EBC Trek (14 Days)', href: '/packages' },
    { label: 'Annapurna Circuit', href: '/packages' },
    { label: 'Jungle Safari', href: '/packages' },
    { label: 'Luxury Nepal Tour', href: '/packages' },
    { label: 'Helicopter Tour', href: '/packages' },
    { label: 'Cultural Tours', href: '/packages' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about' },
    { label: 'Blog & Tips', href: '/blog' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Book a Trip', href: '/booking' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-himalayan-blue via-sky-blue to-nepal-red" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-himalayan-blue to-sky-blue flex items-center justify-center">
                <FaMountain className="text-white text-lg" />
              </div>
              <div>
                <div className="font-bold text-xl text-white leading-tight">Explore Nepal</div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-nepal-red">Travels</div>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted partner for unforgettable Nepal adventures. From Himalayan treks to cultural heritage tours — we create journeys that last a lifetime.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+977-1-4444444" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-himalayan-blue transition-colors">
                  <FiPhone className="text-sm" />
                </div>
                +977-1-4444444
              </a>
              <a href="mailto:info@explorenepal.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-himalayan-blue transition-colors">
                  <FiMail className="text-sm" />
                </div>
                info@explorenepal.com
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-sm" />
                </div>
                Thamel, Kathmandu, Nepal 44600
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaFacebook, href: '#', label: 'Facebook' },
                { icon: FaInstagram, href: '#', label: 'Instagram' },
                { icon: FaYoutube, href: '#', label: 'YouTube' },
                { icon: FaTripadvisor, href: '#', label: 'TripAdvisor' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-himalayan-blue hover:text-white transition-all"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Destinations</h3>
            <ul className="space-y-2.5">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <FiArrowRight className="text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Packages</h3>
            <ul className="space-y-2.5">
              {footerLinks.packages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <FiArrowRight className="text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Company */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Company</h3>
            <ul className="space-y-2.5 mb-7">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <FiArrowRight className="text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-white font-semibold text-sm mb-3">Get Travel Inspiration</p>
              {subscribed ? (
                <p className="text-green-400 text-sm font-medium">✓ Thanks for subscribing!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm px-3 py-2.5 rounded-lg outline-none focus:border-himalayan-blue-light transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-himalayan-blue hover:bg-himalayan-blue-light text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Explore Nepal Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
