"use client";

import { motion } from 'framer-motion';
import {
  MdPool, MdSpa, MdFitnessCenter, MdAirportShuttle,
  MdRoomService, MdMeetingRoom, MdWifi, MdLocalLaundryService,
} from 'react-icons/md';

const iconMap = {
  MdPool: MdPool,
  MdSpa: MdSpa,
  MdFitnessCenter: MdFitnessCenter,
  MdAirportShuttle: MdAirportShuttle,
  MdRoomService: MdRoomService,
  MdMeetingRoom: MdMeetingRoom,
  MdWifi: MdWifi,
  MdLocalLaundryService: MdLocalLaundryService,
};

const ServiceCard = ({ service, index = 0 }) => {
  const Icon = iconMap[service.icon] || MdRoomService;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white rounded-lg p-7 shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-200 overflow-hidden"
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center mb-5 group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-500 shadow-lg">
        <Icon className="text-gold-500 group-hover:text-navy-900 text-2xl transition-colors duration-500" />
      </div>

      {/* Content */}
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-navy-900 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default ServiceCard;
