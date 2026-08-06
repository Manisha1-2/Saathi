"use client";

import Link from 'next/link';
import SectionHeading from '../../components/ui/SectionHeading';
import RoomCard from '../../components/cards/RoomCard';
import Button from '../../components/ui/Button';
import { rooms } from '../../data/rooms';

const FeaturedRooms = () => {
  const featuredRooms = rooms.filter((room) => room.featured).slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="container-hotel">
        <SectionHeading
          label="Accommodations"
          title="Our Finest Rooms & Suites"
          subtitle="Each room is a sanctuary of comfort, thoughtfully designed with premium furnishings and modern amenities to ensure an unforgettable stay."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {featuredRooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/rooms">
            <Button variant="outline" size="lg">
              View All Rooms
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
