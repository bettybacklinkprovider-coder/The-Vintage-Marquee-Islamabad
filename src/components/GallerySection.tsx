import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/venueData';
import { EventCategory, GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories: string[] = [
    'All',
    'Weddings',
    'Receptions',
    'Engagements',
    'Family Events',
    'Corporate Events',
    'Venue Décor'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#121822] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C5A059]/30 bg-[#161C24] text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>GALLERY PREVIEW</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Moments Worth <span className="gold-gradient-text">Remembering</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Take a glimpse at the elegant atmosphere of <strong className="text-white">The Vintage Marquee</strong>.
            Explore our venue, event décor, wedding setups, stage arrangements, dining areas, lighting, and celebration spaces.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FFF0D0] via-[#D4AF37] to-[#AA7C11] text-black shadow-lg shadow-[#C5A059]/20'
                    : 'bg-[#161C24] text-slate-300 hover:text-white border border-[#232B36] hover:border-[#C5A059]/40'
                }`}
                id={`gallery-filter-${cat.toLowerCase().replace(/[^a-z0-0]/g, '')}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-[#161C24] border border-[#232B36] hover:border-[#C5A059]/60 shadow-xl cursor-pointer"
                onClick={() => openLightbox(index)}
                id={`gallery-item-${item.id}`}
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#0B0F15]/80 backdrop-blur-md border border-[#C5A059]/30 text-[11px] font-semibold text-[#D4AF37]">
                    {item.category}
                  </div>

                  {/* Hover Overlay Details */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#C5A059] text-black flex items-center justify-center mb-3 shadow-lg self-end">
                      <Eye className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View Full Gallery CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setSelectedCategory('All')}
            className="px-8 py-3.5 rounded-xl text-sm font-semibold text-[#D4AF37] border border-[#C5A059]/40 bg-[#161C24] hover:bg-[#1C2430] hover:border-[#C5A059] transition-all inline-flex items-center gap-2 cursor-pointer"
            id="view-full-gallery-btn"
          >
            <ImageIcon className="w-4 h-4 text-[#C5A059]" />
            <span>View Full Gallery ({GALLERY_ITEMS.length} Photos)</span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#161C24] border border-slate-700 text-white hover:text-[#D4AF37] transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-[#161C24]/80 border border-slate-700 text-white hover:text-[#D4AF37] transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-[#161C24]/80 border border-slate-700 text-white hover:text-[#D4AF37] transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[activeLightboxIndex].image}
              alt={filteredItems[activeLightboxIndex].title}
              className="max-h-[65vh] w-auto object-contain rounded-xl border border-[#C5A059]/30 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#D4AF37] text-xs font-semibold mb-2">
                {filteredItems[activeLightboxIndex].category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                {filteredItems[activeLightboxIndex].caption}
              </p>
              <div className="text-xs text-slate-500 mt-2">
                Image {activeLightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
