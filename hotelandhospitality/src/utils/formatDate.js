export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const formatPrice = (price, currency = '$') => {
  return `${currency}${price.toLocaleString()}`;
};

export const getMinDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export const getMinCheckoutDate = (checkInDate) => {
  if (!checkInDate) return getMinDate();
  const nextDay = new Date(checkInDate);
  nextDay.setDate(nextDay.getDate() + 1);
  return nextDay.toISOString().split('T')[0];
};

export const calculateNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;
  const diff = new Date(checkOut) - new Date(checkIn);
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
};
