"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';

const RestaurantPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-hotel">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              label="Culinary Excellence"
              title="A World of Flavors"
              subtitle=""
              align="left"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Embark on a culinary journey at Saathi Grand&apos;s five distinctive restaurants,
                each offering a unique dining experience crafted by our internationally trained chefs.
              </p>
              <p>
                From authentic Nepalese cuisine to contemporary international flavors, our menus
                are composed with the freshest locally sourced ingredients and presented with
                artistic flair that delights every sense.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
              {[
                { label: '5 Restaurants', detail: 'Global cuisines' },
                { label: 'Rooftop Bar', detail: 'Craft cocktails' },
                { label: 'Private Dining', detail: 'Intimate settings' },
                { label: 'In-Room Service', detail: '24/7 available' },
              ].map((item, i) => (
                <div key={i} className="bg-cream-50 p-4 rounded-lg border border-cream-200">
                  <h4 className="font-[family-name:var(--font-heading)] text-navy-900 font-semibold text-sm">
                    {item.label}
                  </h4>
                  <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
                </div>
              ))}
            </div>

            <Link href="/restaurant">
              <Button variant="primary" size="lg">
                View Menu & Reserve
              </Button>
            </Link>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
              alt="Fine dining experience"
              loading="lazy"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-xl"
            />
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 md:left-6 bg-white p-5 rounded-lg shadow-xl max-w-[200px] border border-cream-200">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=100&q=80"
                  alt="Executive Chef"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-navy-900 font-semibold text-sm">Chef Rajesh</p>
                  <p className="text-gold-600 text-xs">Executive Chef</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantPreview;
