export const rooms = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tagline: 'Comfort meets elegance',
    shortDescription: 'A spacious retreat featuring contemporary design with traditional touches, perfect for the discerning traveler.',
    description: `Step into a world of refined comfort in our Deluxe Room. Spanning 45 square meters, this beautifully appointed room features floor-to-ceiling windows that flood the space with natural light, offering stunning views of the surrounding landscape.

The room is thoughtfully designed with a plush king-size bed dressed in premium Egyptian cotton linens, a cozy sitting area, and a work desk for those who need to stay connected. The en-suite marble bathroom features a rain shower, premium toiletries, and heated towel rails.

Every detail has been curated to ensure your stay is nothing short of exceptional — from the handcrafted wooden furniture to the ambient lighting that sets the perfect mood for relaxation.`,
    price: 180,
    originalPrice: 220,
    currency: '$',
    perNight: true,
    capacity: { adults: 2, children: 1 },
    size: '45 m²',
    bedType: 'King Bed',
    view: 'Garden View',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d955e4c47?w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    amenities: [
      'Free WiFi', 'Air Conditioning', 'Mini Bar', 'Room Safe', 'Flat Screen TV',
      'Coffee Machine', 'Hair Dryer', 'Iron & Board', 'Rain Shower', 'Bathrobes & Slippers',
    ],
    featured: true,
  },
  {
    id: 'premium-suite',
    name: 'Premium Suite',
    tagline: 'Where luxury lives',
    shortDescription: 'An expansive suite with separate living area, premium amenities, and breathtaking mountain vistas.',
    description: `Our Premium Suite redefines luxury living with 70 square meters of meticulously designed space. The suite features a separate living room, a private bedroom, and a spa-inspired bathroom — all connected by a seamless flow of sophisticated design.

Wake up to panoramic mountain views through floor-to-ceiling windows, then enjoy your morning coffee in the private sitting area. The living room is perfect for entertaining or unwinding with its plush sofa, 55-inch smart TV, and curated minibar.

The bedroom sanctuary features a super king-size bed with a pillow menu, premium linens, and blackout curtains for the perfect night's sleep. The marble bathroom boasts a freestanding soaking tub, separate rain shower, and double vanity.`,
    price: 320,
    originalPrice: 400,
    currency: '$',
    perNight: true,
    capacity: { adults: 2, children: 2 },
    size: '70 m²',
    bedType: 'Super King Bed',
    view: 'Mountain View',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    amenities: [
      'Free WiFi', 'Air Conditioning', 'Premium Mini Bar', 'In-Room Safe', '55" Smart TV',
      'Nespresso Machine', 'Soaking Bathtub', 'Walk-in Closet', 'Pillow Menu', 'Butler Service',
      'Private Balcony', 'Living Room',
    ],
    featured: true,
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    tagline: 'Business meets pleasure',
    shortDescription: 'Designed for the modern executive — premium workspace, lounge access, and unparalleled comfort.',
    description: `The Executive Suite is crafted for those who demand excellence in every aspect of their stay. At 85 square meters, this suite offers a dedicated workspace, a luxurious bedroom, and a refined living area — all designed with the modern professional in mind.

The private study features a large executive desk, ergonomic chair, high-speed internet, and a printer — everything you need to stay productive. When work is done, retreat to the living area with its designer furniture and curated art collection.

Guests enjoy complimentary access to the Executive Lounge with evening cocktails, breakfast service, and all-day refreshments. The suite also includes a private check-in experience and priority access to all hotel facilities.`,
    price: 450,
    originalPrice: 550,
    currency: '$',
    perNight: true,
    capacity: { adults: 3, children: 1 },
    size: '85 m²',
    bedType: 'King Bed + Sofa Bed',
    view: 'Lake View',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80',
    amenities: [
      'Free WiFi', 'Central AC', 'Premium Mini Bar', 'In-Room Safe', '65" Smart TV',
      'Nespresso Machine', 'Soaking Bathtub', 'Rain Shower', 'Executive Desk', 'Printer',
      'Lounge Access', 'Private Balcony', 'Dining Area', 'Bathrobes & Slippers',
    ],
    featured: true,
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    tagline: 'The pinnacle of luxury',
    shortDescription: 'Our most exclusive accommodation — a private residence with panoramic views, personal butler, and bespoke experiences.',
    description: `The Presidential Suite is the crown jewel of Saathi Grand — a 150 square meter private residence that represents the absolute pinnacle of luxury hospitality. Every element has been hand-selected and curated to create an experience that transcends ordinary hotel stays.

Enter through your private foyer into a grand living room adorned with original artwork, designer furniture, and panoramic floor-to-ceiling windows offering unobstructed 180-degree views. The formal dining room seats six, perfect for intimate private dinners prepared by our executive chef.

The master bedroom is a sanctuary of tranquility with a custom-made king bed, walk-in dressing room, and a spa bathroom featuring a jacuzzi tub, steam shower, and dual rain showers. A dedicated personal butler is available 24/7 to attend to your every desire.`,
    price: 850,
    originalPrice: 1100,
    currency: '$',
    perNight: true,
    capacity: { adults: 4, children: 2 },
    size: '150 m²',
    bedType: 'Custom King Bed',
    view: 'Panoramic Lake & Mountain',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d955e4c47?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1590490360182-c33d955e4c47?w=600&q=80',
    amenities: [
      'Free WiFi', 'Climate Control', 'Stocked Bar', 'Walk-in Safe', '75" Smart TV',
      'Full Kitchen', 'Jacuzzi Tub', 'Steam Shower', 'Walk-in Closet', 'Personal Butler 24/7',
      'Private Terrace', 'Dining Room', 'Grand Piano', 'Home Theater', 'Private Elevator',
      'Complimentary Airport Transfer',
    ],
    featured: true,
  },
];

export default rooms;
