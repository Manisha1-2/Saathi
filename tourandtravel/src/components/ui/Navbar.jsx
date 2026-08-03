'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiPhone,
  FiChevronDown,
} from 'react-icons/fi';
import { FaMountain } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Destinations',
    href: '/destinations',
    children: [
      { label: 'Kathmandu', href: '/destinations/kathmandu' },
      { label: 'Pokhara', href: '/destinations/pokhara' },
      { label: 'Everest Region', href: '/destinations/everest-region' },
      { label: 'Mustang', href: '/destinations/mustang' },
      { label: 'Chitwan', href: '/destinations/chitwan' },
      { label: 'View All', href: '/destinations' },
    ],
  },
  {
    label: 'Packages',
    href: '/packages',
  },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navBg = scrolled || !isHome
    ? 'bg-white/98 backdrop-blur-xl shadow-sm border-b border-slate-100'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-slate-700' : 'text-white';
  const logoColor = scrolled || !isHome ? 'text-himalayan-blue' : 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        style={{ height: 'var(--navbar-height)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Explore Nepal Travels - Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-himalayan-blue to-sky-blue flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <FaMountain className="text-white text-base" />
            </div>
            <div>
              <div className={`font-bold text-lg leading-tight transition-colors ${logoColor}`}>
                Explore Nepal
              </div>
              <div className={`text-[10px] font-semibold tracking-widest uppercase transition-colors ${scrolled || !isHome ? 'text-nepal-red' : 'text-white/80'}`}>
                Travels
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:text-himalayan-blue-light ${
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? scrolled || !isHome
                        ? 'text-himalayan-blue bg-sky-light'
                        : 'text-white bg-white/10'
                      : textColor
                  }`}
                >
                  {link.label}
                  {link.children && <FiChevronDown className={`text-xs transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm text-slate-700 hover:bg-sky-light hover:text-himalayan-blue transition-colors ${
                            child.label === 'View All' ? 'font-semibold text-nepal-red border-t border-slate-100 mt-1' : ''
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+977-1-4444444"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${scrolled || !isHome ? 'text-slate-600 hover:text-himalayan-blue' : 'text-white/80 hover:text-white'}`}
            >
              <FiPhone className="text-xs" />
              +977-1-4444444
            </a>
            <Link
              href="/booking"
              className="bg-nepal-red hover:bg-nepal-red-dark text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-nepal-red/30 active:scale-95"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled || !isHome ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden overflow-y-auto shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-himalayan-blue to-sky-blue flex items-center justify-center">
                    <FaMountain className="text-white text-sm" />
                  </div>
                  <span className="font-bold text-slate-800">Explore Nepal</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                  aria-label="Close navigation"
                >
                  <FiX className="text-lg" />
                </button>
              </div>

              <nav className="p-5 space-y-1" aria-label="Mobile navigation links">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                        pathname === link.href
                          ? 'bg-sky-light text-himalayan-blue'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-himalayan-blue'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.children.slice(0, -1).map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 rounded-lg text-sm text-slate-500 hover:text-himalayan-blue hover:bg-slate-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="p-5 border-t border-slate-100 space-y-3">
                <a
                  href="tel:+977-1-4444444"
                  className="flex items-center gap-2 text-sm text-slate-600 font-medium"
                >
                  <FiPhone />
                  +977-1-4444444
                </a>
                <Link
                  href="/booking"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-nepal-red text-white font-bold py-3 rounded-xl hover:bg-nepal-red-dark transition-colors"
                >
                  Book Your Trip
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
