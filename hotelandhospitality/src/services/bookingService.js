import api from './api';

// Mock delay to simulate API call
const mockDelay = (ms = 1500) => new Promise((resolve) => setTimeout(resolve, ms));

export const submitBooking = async (bookingData) => {
  try {
    // Simulate API call
    await mockDelay();
    // In production, uncomment below:
    // const response = await api.post('/bookings', bookingData);
    // return response;

    // Mock response
    return {
      success: true,
      message: 'Booking confirmed successfully!',
      data: {
        bookingId: `SG-${Date.now()}`,
        ...bookingData,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
      },
    };
  } catch (error) {
    throw new Error(error.message || 'Failed to submit booking. Please try again.');
  }
};

export const checkAvailability = async ({ roomType, checkIn, checkOut }) => {
  try {
    await mockDelay(800);
    // Mock availability check
    return {
      available: true,
      roomType,
      checkIn,
      checkOut,
      pricePerNight: 180,
    };
  } catch (error) {
    throw new Error('Failed to check availability.');
  }
};

export const submitContactForm = async (contactData) => {
  try {
    await mockDelay();
    return {
      success: true,
      message: 'Thank you for reaching out! We will get back to you within 24 hours.',
      data: {
        ticketId: `CT-${Date.now()}`,
        ...contactData,
      },
    };
  } catch (error) {
    throw new Error('Failed to send message. Please try again.');
  }
};

export const submitReservation = async (reservationData) => {
  try {
    await mockDelay();
    return {
      success: true,
      message: 'Table reserved successfully! We look forward to serving you.',
      data: {
        reservationId: `RS-${Date.now()}`,
        ...reservationData,
      },
    };
  } catch (error) {
    throw new Error('Failed to reserve table. Please try again.');
  }
};
