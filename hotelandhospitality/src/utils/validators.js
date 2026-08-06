import { z } from 'zod';

export const bookingSchema = z
  .object({
    fullName: z
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name is too long'),
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Please enter a valid email address'),
    phone: z
      .string()
      .min(7, 'Please enter a valid phone number')
      .max(20, 'Phone number is too long'),
    checkIn: z.string().min(1, 'Check-in date is required'),
    checkOut: z.string().min(1, 'Check-out date is required'),
    guests: z
      .number({ invalid_type_error: 'Please enter number of guests' })
      .min(1, 'At least 1 guest required')
      .max(10, 'Maximum 10 guests allowed'),
    roomType: z.string().min(1, 'Please select a room type'),
    specialRequests: z.string().max(500, 'Maximum 500 characters').optional(),
  })
  .refine(
    (data) => {
      if (data.checkIn && data.checkOut) {
        return new Date(data.checkOut) > new Date(data.checkIn);
      }
      return true;
    },
    {
      message: 'Check-out date must be after check-in date',
      path: ['checkOut'],
    }
  );

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long'),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject is too long'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Maximum 1000 characters'),
});
