import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { VENUE_SPECS } from '../data/venueData';

interface WelcomeSectionProps {
  onOpenAbout: () => void;
  onOpenBooking: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onOpenAbout, onOpenBooking }) => {
  return (
    <section id="welcome" className="py-20 md:py-28 bg-[#0B0F15] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop"
                alt="Welcome to The Vintage Marquee"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-transparent to-transparent opacity-80" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#121822]/90 backdrop-blur-md border border-[#C5A059]/40 shadow-xl flex items-center justify-between">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[#C5A059] font-medium">
                    VENUE CAPACITY
                  </span>
                  <span className="text-lg font-bold text-white font-serif">
                    {VENUE_SPECS.totalCapacity}
                  </span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[#C5A059]/20 text-[#D4AF37] text-xs font-semibold border border-[#C5A059]/30">
                  Fully Air-Conditioned
                </div>
              </div>
            </div>

            {/* Secondary Floating Image Accent */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 h-40 rounded-xl overflow-hidden border-2 border-[#C5A059]/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop"
                alt="Chandelier Decor"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C5A059]/30 bg-[#161C24] text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>ABOUT OUR VENUE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Welcome to <span className="gold-gradient-text">The Vintage Marquee</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                At <strong className="text-white">The Vintage Marquee</strong>, every celebration deserves a beautiful setting.
              </p>
              <p>
                Our venue provides an elegant atmosphere where your special moments can be celebrated with comfort, style, and attention to detail. From intimate family gatherings to grand wedding celebrations, we offer a welcoming space for creating memories that last a lifetime.
              </p>
              <p className="text-slate-300/90">
                Whether you're planning your wedding, reception, engagement, birthday, anniversary, or corporate gathering, The Vintage Marquee is ready to make your event special.
              </p>
            </div>

            {/* Key Features Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Elegantly Designed Pillarless Hall</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Royal Catering & Custom Menus</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Dedicated VIP Groom & Bridal Suites</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Ample Valet Parking Area</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAbout}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-[#FFF0D0] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 shadow-lg shadow-[#C5A059]/20 transition-all flex items-center gap-2 cursor-pointer"
                id="welcome-discover-btn"
              >
                <span>Discover More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white border border-[#C5A059]/40 bg-[#161C24] hover:bg-[#1C2430] hover:border-[#C5A059] transition-all cursor-pointer"
                id="welcome-reserve-btn"
              >
                Check Date Availability
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
