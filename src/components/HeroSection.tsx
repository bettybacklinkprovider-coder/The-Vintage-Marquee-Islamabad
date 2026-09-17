import React from 'react';
import { Phone, Calendar, ArrowRight, MapPin, Sparkles, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { VENUE_INFO } from '../data/venueData';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const scrollToVenue = () => {
    const welcomeEl = document.getElementById('welcome');
    if (welcomeEl) {
      welcomeEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B0F15]">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
          alt="The Vintage Marquee Grand Decor"
          className="w-full h-full object-cover object-center brightness-[0.35] scale-105 transform filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-[#0B0F15]/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Decorative Golden Borders */}
      <div className="absolute top-12 left-6 right-6 bottom-12 border border-[#C5A059]/15 pointer-events-none rounded-2xl hidden md:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Venue Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#161C24]/80 text-[#D4AF37] text-xs sm:text-sm font-medium tracking-wide shadow-lg mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>ISLAMABAD’S PREMIER LUXURY EVENT VENUE</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          Celebrate Your Special Moments <span className="gold-gradient-text block mt-1">in Style</span>
        </motion.h1>

        {/* Intro Body Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-8"
        >
          <strong className="text-white font-semibold">The Vintage Marquee</strong> offers an elegant and memorable setting for weddings, receptions, engagements, family celebrations, and special events in Islamabad.
          <span className="block mt-2 text-slate-300/90 italic">
            Create beautiful memories in a venue designed for unforgettable celebrations.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-black bg-gradient-to-r from-[#FFF0D0] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 shadow-xl shadow-[#C5A059]/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer"
            id="hero-book-event-btn"
          >
            <Calendar className="w-5 h-5 text-black" />
            <span>Book Your Event</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={scrollToVenue}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-white border border-[#C5A059]/40 bg-[#161C24]/70 hover:bg-[#161C24] hover:border-[#C5A059] transition-all flex items-center justify-center gap-2 cursor-pointer"
            id="hero-explore-venue-btn"
          >
            <span>Explore Our Venue</span>
          </button>
        </motion.div>

        {/* Phone Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3.5 rounded-2xl border border-[#C5A059]/30 bg-[#121822]/90 backdrop-blur-md shadow-2xl"
        >
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>Direct Reservations Hotline:</span>
          </div>
          <a
            href={`tel:${VENUE_INFO.phoneRaw}`}
            className="text-lg sm:text-xl font-bold text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1.5"
            id="hero-phone-link"
          >
            {VENUE_INFO.phone}
          </a>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto pt-8 border-t border-[#232B36]/80 text-left"
        >
          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#161C24]/50 border border-slate-800/50">
            <Users className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white">Up to 1,500 Guests</h4>
              <p className="text-xs text-slate-400">Grand pillarless banquet hall</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#161C24]/50 border border-slate-800/50">
            <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white">Marquees Complex Rd</h4>
              <p className="text-xs text-slate-400">Prime Islamabad Expressway access</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-start gap-3 p-3 rounded-xl bg-[#161C24]/50 border border-slate-800/50">
            <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white">Full Generator Backup</h4>
              <p className="text-xs text-slate-400">Uninterrupted climate control & lighting</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
