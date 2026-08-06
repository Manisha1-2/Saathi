"use client";

import SectionHeading from '../../components/ui/SectionHeading';
import ServiceCard from '../../components/cards/ServiceCard';
import { SERVICES } from '../../constants';

const Services = () => {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-hotel">
        <SectionHeading
          label="What We Offer"
          title="Services & Amenities"
          subtitle="From rejuvenating spa treatments to world-class fitness facilities, discover a curated collection of services designed for your comfort and pleasure."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
