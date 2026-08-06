"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenu, IoClose } from 'react-icons/io5';
import { NAV_LINKS } from '../../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Only hero pages get transparent navbar
  const isHeroPage = ['/', '/about', '/restaurant', '/gallery'].includes(pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const navBg = isScrolled || !isHeroPage
    ? 'bg-navy-900/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="container-hotel flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold text-white tracking-wide">
              SAATHI
            </span>
            <span className="text-gold-500 text-[10px] md:text-xs tracking-[0.3em] font-[family-name:var(--font-accent)]">
              GRAND HOTEL
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-4 py-2 text-sm tracking-wide transition-colors duration-300 font-medium
                  ${isActive ? 'text-gold-500' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold-500"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/booking"
            className="px-6 py-2.5 bg-gold-500 text-navy-900 text-sm font-semibold tracking-wide
                       hover:bg-gold-400 transition-all duration-300 rounded-sm"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-white p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-900/98 backdrop-blur-lg border-t border-white/10 overflow-hidden"
          >
            <div className="container-hotel py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link, index) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.path}
                      className={`block py-3 px-4 text-base tracking-wide transition-colors duration-300 rounded-sm
                        ${isActive ? 'text-gold-500 bg-white/5' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <Link
                href="/booking"
                className="mt-4 block text-center px-6 py-3 bg-gold-500 text-navy-900 font-semibold tracking-wide rounded-sm"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
