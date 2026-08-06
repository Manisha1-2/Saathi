"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bookingSchema } from '../../utils/validators';
import { getMinDate, getMinCheckoutDate } from '../../utils/formatDate';
import { submitBooking } from '../../services/bookingService';
import { rooms } from '../../data/rooms';
import Button from '../ui/Button';
import { IoCheckmarkCircle, IoAlertCircle } from 'react-icons/io5';

const BookingForm = ({ preselectedRoom = '' }) => {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: 1,
      roomType: preselectedRoom,
      specialRequests: '',
    },
  });

  const checkInDate = watch('checkIn');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const result = await submitBooking(data);
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" id="booking-form">
      {/* Status message */}
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
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className={inputClass('fullName')}
            {...register('fullName')}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            className={inputClass('email')}
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone & Guests */}
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
            Guests <span className="text-red-400">*</span>
          </label>
          <input
            type="number"
            min="1"
            max="10"
            placeholder="2"
            className={inputClass('guests')}
            {...register('guests', { valueAsNumber: true })}
          />
          {errors.guests && (
            <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>
          )}
        </div>
      </div>

      {/* Check-in & Check-out */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1.5">
            Check-in Date <span className="text-red-400">*</span>
          </label>
          <input
            type="date"
            min={getMinDate()}
            className={inputClass('checkIn')}
            {...register('checkIn')}
          />
          {errors.checkIn && (
            <p className="text-red-500 text-xs mt-1">{errors.checkIn.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1.5">
            Check-out Date <span className="text-red-400">*</span>
          </label>
          <input
            type="date"
            min={getMinCheckoutDate(checkInDate)}
            className={inputClass('checkOut')}
            {...register('checkOut')}
          />
          {errors.checkOut && (
            <p className="text-red-500 text-xs mt-1">{errors.checkOut.message}</p>
          )}
        </div>
      </div>

      {/* Room selection */}
      <div>
        <label className="block text-sm font-medium text-navy-900 mb-1.5">
          Room Type <span className="text-red-400">*</span>
        </label>
        <select className={inputClass('roomType')} {...register('roomType')}>
          <option value="">Select a room</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name} — {room.currency}{room.price}/night
            </option>
          ))}
        </select>
        {errors.roomType && (
          <p className="text-red-500 text-xs mt-1">{errors.roomType.message}</p>
        )}
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-sm font-medium text-navy-900 mb-1.5">
          Special Requests
        </label>
        <textarea
          rows="3"
          placeholder="Any special requests or preferences..."
          className={`${inputClass('specialRequests')} resize-none`}
          {...register('specialRequests')}
        />
        {errors.specialRequests && (
          <p className="text-red-500 text-xs mt-1">{errors.specialRequests.message}</p>
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
        {isSubmitting ? 'Processing...' : 'Confirm Booking'}
      </Button>
    </form>
  );
};

export default BookingForm;
