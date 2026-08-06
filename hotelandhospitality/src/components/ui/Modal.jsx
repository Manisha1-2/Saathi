"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Modal = ({ isOpen, onClose, children, className = '' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <IoClose size={32} />
          </button>

          {/* Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative z-10 max-w-5xl w-full ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Lightbox variant for gallery
export const Lightbox = ({ images, currentIndex, isOpen, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative flex items-center justify-center">
        {/* Previous */}
        <button
          onClick={onPrev}
          className="absolute left-2 md:left-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors cursor-pointer"
        >
          <IoChevronBack size={24} />
        </button>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]?.src}
            alt={images[currentIndex]?.alt || ''}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg"
          />
        </AnimatePresence>

        {/* Next */}
        <button
          onClick={onNext}
          className="absolute right-2 md:right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors cursor-pointer"
        >
          <IoChevronForward size={24} />
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </Modal>
  );
};

export default Modal;
