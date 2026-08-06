"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import { Lightbox } from '../../components/ui/Modal';
import { GALLERY_IMAGES } from '../../constants';

const GalleryPreview = () => {
  const previewImages = GALLERY_IMAGES.slice(0, 6);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-hotel">
        <SectionHeading
          label="Visual Tour"
          title="Explore Our Gallery"
          subtitle="Take a visual journey through the elegance and beauty of Saathi Grand Hotel & Resort."
        />

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-lg cursor-pointer
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                ${index === 0 ? 'h-64 md:h-full' : 'h-48 md:h-56'}`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-all duration-500 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm tracking-wider uppercase font-medium">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery">
            <Button variant="outline" size="lg">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={previewImages}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentImage((prev) => (prev === 0 ? previewImages.length - 1 : prev - 1))}
        onNext={() => setCurrentImage((prev) => (prev === previewImages.length - 1 ? 0 : prev + 1))}
      />
    </section>
  );
};

export default GalleryPreview;
