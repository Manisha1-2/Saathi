import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/sections/Hero/HeroSection";
import DestinationsSection from "@/sections/Destinations/DestinationsSection";
import PackagesSection from "@/sections/Packages/PackagesSection";
import WhyUsSection from "@/sections/WhyUs/WhyUsSection";
import StatsSection from "@/sections/Stats/StatsSection";
import GallerySection from "@/sections/Gallery/GallerySection";
import TestimonialsSection from "@/sections/Testimonials/TestimonialsSection";
import BlogSection from "@/sections/Blog/BlogSection";
import NewsletterSection from "@/sections/Newsletter/NewsletterSection";
import Footer from "@/components/ui/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <HeroSection />
      <DestinationsSection />
      <PackagesSection />
      <WhyUsSection />
      <StatsSection />
      <GallerySection />
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

