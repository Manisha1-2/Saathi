"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactSchema } from '../../utils/validators';
import { submitContactForm } from '../../services/bookingService';
import Button from '../ui/Button';
import { IoCheckmarkCircle, IoAlertCircle } from 'react-icons/io5';

const ContactForm = () => {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const result = await submitContactForm(data);
      setStatus({ type: 'success', message: result.message });
      reset();
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (fieldName) =>
    `w-full px-4 py-3 bg-cream-50 border rounded-sm text-navy-900 text-sm 
     placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500
     transition-all duration-300 font-[family-name:var(--font-body)]
     ${errors[fieldName] ? 'border-red-400 bg-red-50/50' : 'border-cream-300'}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" id="contact-form">
      {/* Status */}
      <AnimatePresence>
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`flex items-center gap-3 p-4 rounded-sm text-sm ${
              status.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {status.type === 'success' ? (
              <IoCheckmarkCircle className="text-xl flex-shrink-0" />
            ) : (
              <IoAlertCircle className="text-xl flex-shrink-0" />
            )}
            {status.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1.5">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            className={inputClass('name')}
            {...register('name')}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className={inputClass('email')}
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone & Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1.5">
            Phone <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            placeholder="+977-XXX-XXXXXXX"
            className={inputClass('phone')}
            {...register('phone')}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1.5">
            Subject <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            placeholder="How can we help?"
            className={inputClass('subject')}
            {...register('subject')}
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-navy-900 mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          rows="5"
          placeholder="Tell us more..."
          className={`${inputClass('message')} resize-none`}
          {...register('message')}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
