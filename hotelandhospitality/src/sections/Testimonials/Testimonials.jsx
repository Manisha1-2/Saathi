"use client";

import SectionHeading from '../../components/ui/SectionHeading';
import TestimonialCard from '../../components/cards/TestimonialCard';
import { TESTIMONIALS } from '../../constants';

const Testimonials = () => {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-hotel">
        <SectionHeading
          label="Guest Experiences"
          title="What Our Guests Say"
          subtitle="Hear from travelers who have experienced the Saathi Grand difference."
        />

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
