'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiUsers, FiMessageSquare, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import destinations from '@/data/destinations';

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(60, 'Name too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Phone number too short').max(20, 'Phone number too long'),
  destination: z.string().min(1, 'Please select a destination'),
  travelDate: z.string().min(1, 'Please select a travel date'),
  travelers: z.string().min(1, 'Please select number of travelers'),
  message: z.string().max(500, 'Message too long').optional(),
});

const InputField = ({ label, id, icon: Icon, error, children, ...props }) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          <Icon className="text-sm" />
        </div>
      )}
      {children ? (
        <div className={Icon ? 'pl-9' : ''}>{children}</div>
      ) : (
        <input
          id={id}
          className={`form-input ${Icon ? 'pl-10' : ''} ${error ? 'error' : ''}`}
          {...props}
        />
      )}
    </div>
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-xs text-nepal-red flex items-center gap-1 font-medium"
          role="alert"
        >
          <FiAlertCircle className="flex-shrink-0" />
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

export default function BookingForm({ defaultDestination = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: { destination: defaultDestination },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-10 text-center shadow-sm border border-slate-100"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.1 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <FiCheckCircle className="text-green-600 text-4xl" />
        </motion.div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Booking Request Sent!</h3>
        <p className="text-slate-500 mb-3">
          Thank you for choosing <strong>Explore Nepal Travels</strong>. Our team will contact you within 24 hours to confirm your trip details.
        </p>
        <p className="text-sm text-slate-400 mb-8">
          📧 Check your email for a confirmation copy.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary"
        >
          Plan Another Trip
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100"
    >
      <div className="mb-7">
        <h3 className="text-2xl font-bold text-slate-900 mb-1.5">Book Your Trip</h3>
        <p className="text-slate-500 text-sm">Fill in your details and we&apos;ll get back to you within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <InputField
            label="Full Name *"
            id="booking-fullName"
            icon={FiUser}
            error={errors.fullName?.message}
            placeholder="John Smith"
            type="text"
            autoComplete="name"
            {...register('fullName')}
          />

          {/* Email */}
          <InputField
            label="Email Address *"
            id="booking-email"
            icon={FiMail}
            error={errors.email?.message}
            placeholder="john@example.com"
            type="email"
            autoComplete="email"
            {...register('email')}
          />

          {/* Phone */}
          <InputField
            label="Phone Number *"
            id="booking-phone"
            icon={FiPhone}
            error={errors.phone?.message}
            placeholder="+1 234 567 890"
            type="tel"
            autoComplete="tel"
            {...register('phone')}
          />

          {/* Travelers */}
          <div className="space-y-1.5">
            <label htmlFor="booking-travelers" className="block text-sm font-semibold text-slate-700">
              Number of Travelers *
            </label>
            <div className="relative">
              <FiUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <select
                id="booking-travelers"
                className={`form-input pl-10 ${errors.travelers ? 'error' : ''}`}
                {...register('travelers')}
              >
                <option value="">Select travelers</option>
                {['Solo (1)', '2 People', '3–4 People', '5–8 People', '9–12 People', '13+ People (Group)'].map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            {errors.travelers && (
              <p className="text-xs text-nepal-red flex items-center gap-1 font-medium" role="alert">
                <FiAlertCircle /> {errors.travelers.message}
              </p>
            )}
          </div>
        </div>

        {/* Destination */}
        <div className="space-y-1.5">
          <label htmlFor="booking-destination" className="block text-sm font-semibold text-slate-700">
            Destination / Package *
          </label>
          <div className="relative">
            <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <select
              id="booking-destination"
              className={`form-input pl-10 ${errors.destination ? 'error' : ''}`}
              {...register('destination')}
            >
              <option value="">Select a destination or package</option>
              <optgroup label="Popular Destinations">
                {destinations.map((d) => (
                  <option key={d.slug} value={d.name}>{d.name}</option>
                ))}
              </optgroup>
            </select>
          </div>
          {errors.destination && (
            <p className="text-xs text-nepal-red flex items-center gap-1 font-medium" role="alert">
              <FiAlertCircle /> {errors.destination.message}
            </p>
          )}
        </div>

        {/* Travel Date */}
        <InputField
          label="Preferred Travel Date *"
          id="booking-travelDate"
          icon={FiCalendar}
          error={errors.travelDate?.message}
          type="date"
          min={new Date().toISOString().split('T')[0]}
          {...register('travelDate')}
        />

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="booking-message" className="block text-sm font-semibold text-slate-700">
            Special Requests or Message
          </label>
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-4 text-slate-400 text-sm" />
            <textarea
              id="booking-message"
              rows={4}
              className={`form-input pl-10 resize-none ${errors.message ? 'error' : ''}`}
              placeholder="Any special requirements, dietary needs, fitness level, previous trekking experience..."
              {...register('message')}
            />
          </div>
          {errors.message && (
            <p className="text-xs text-nepal-red flex items-center gap-1 font-medium" role="alert">
              <FiAlertCircle /> {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          id="booking-submit-btn"
          className="w-full btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending Request...
            </span>
          ) : (
            '🏔 Send Booking Request'
          )}
        </button>

        <p className="text-center text-xs text-slate-400">
          By submitting, you agree to our{' '}
          <a href="#" className="text-himalayan-blue hover:underline">Terms & Conditions</a>.
          {' '}100% free consultation, no obligation.
        </p>
      </form>
    </motion.div>
  );
}
