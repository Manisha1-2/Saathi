"use client";

import Hero from '../sections/Hero/Hero';
import AboutHotel from '../sections/AboutHotel/AboutHotel';
import FeaturedRooms from '../sections/FeaturedRooms/FeaturedRooms';
import Services from '../sections/Services/Services';
import Amenities from '../sections/Amenities/Amenities';
import RestaurantPreview from '../sections/Restaurant/RestaurantPreview';
import Testimonials from '../sections/Testimonials/Testimonials';
import GalleryPreview from '../sections/Gallery/GalleryPreview';
import ContactSection from '../sections/ContactSection/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutHotel />
      <FeaturedRooms />
      <Services />
      <Amenities />
      <RestaurantPreview />
      <Testimonials />
      <GalleryPreview />
      <ContactSection />
    </>
  );
};

export default Home;
