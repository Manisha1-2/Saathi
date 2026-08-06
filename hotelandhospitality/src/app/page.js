import Hero from '@/sections/Hero/Hero';
import AboutHotel from '@/sections/AboutHotel/AboutHotel';
import FeaturedRooms from '@/sections/FeaturedRooms/FeaturedRooms';
import Services from '@/sections/Services/Services';
import Amenities from '@/sections/Amenities/Amenities';
import RestaurantPreview from '@/sections/Restaurant/RestaurantPreview';
import Testimonials from '@/sections/Testimonials/Testimonials';
import GalleryPreview from '@/sections/Gallery/GalleryPreview';
import ContactSection from '@/sections/ContactSection/ContactSection';

export const metadata = {
  title: 'Saathi Grand Hotel & Resort | Luxury Redefined',
  description:
    'Experience the pinnacle of luxury hospitality at Saathi Grand Hotel & Resort in Pokhara, Nepal.',
};

export default function HomePage() {
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
}
