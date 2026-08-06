"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { CONTACT_INFO } from '../../constants';

const ContactSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Hotel"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/90" />
      </div>

      <div className="container-hotel relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-[family-name:var(--font-accent)] text-lg tracking-widest uppercase mb-3 block"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
          >
            We&apos;d Love to Hear From You
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-[1px] bg-gold-500 mx-auto mb-8"
          />

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {[
              { icon: IoLocationOutline, label: 'Visit Us', value: 'Lakeside, Pokhara' },
              { icon: IoCallOutline, label: 'Call Us', value: CONTACT_INFO.phone },
              { icon: IoMailOutline, label: 'Email Us', value: CONTACT_INFO.email },
            ].map(({ icon: Icon, label, value }, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <Icon className="text-gold-500 text-2xl mx-auto mb-3" />
                <h4 className="text-white font-medium text-sm mb-1">{label}</h4>
                <p className="text-white/60 text-sm">{value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gold-500 text-navy-900 font-semibold tracking-wider text-sm uppercase
                         hover:bg-gold-400 transition-all duration-300 rounded-sm shadow-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
