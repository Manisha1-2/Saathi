import Link from 'next/link';
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io5';
import { NAV_LINKS, CONTACT_INFO } from '../../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/70">
      {/* Main footer */}
      <div className="container-hotel section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <div className="flex flex-col leading-none">
                <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white tracking-wide">
                  SAATHI
                </span>
                <span className="text-gold-500 text-xs tracking-[0.3em] font-[family-name:var(--font-accent)]">
                  GRAND HOTEL
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Experience the pinnacle of luxury hospitality. Where timeless elegance meets
              modern comfort in every detail.
            </p>
            <div className="flex gap-3">
              {[
                { icon: IoLogoFacebook, href: CONTACT_INFO.socialLinks.facebook },
                { icon: IoLogoInstagram, href: CONTACT_INFO.socialLinks.instagram },
                { icon: IoLogoTwitter, href: CONTACT_INFO.socialLinks.twitter },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
                             hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-white text-lg font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm hover:text-gold-500 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-500/50 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/booking"
                  className="text-sm hover:text-gold-500 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-gold-500/50 rounded-full" />
                  Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-white text-lg font-semibold mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {['Luxury Rooms', 'Fine Dining', 'Spa & Wellness', 'Swimming Pool', 'Conference Hall', 'Airport Transfer'].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold-500/50 rounded-full" />
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-white text-lg font-semibold mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <IoLocationOutline className="text-gold-500 text-lg flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <IoCallOutline className="text-gold-500 text-lg flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-gold-500 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <IoMailOutline className="text-gold-500 text-lg flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold-500 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container-hotel py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {currentYear} Saathi Grand Hotel & Resort. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
