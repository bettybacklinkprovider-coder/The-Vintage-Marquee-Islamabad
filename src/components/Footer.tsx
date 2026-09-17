import React from 'react';
import { Sparkles, Phone, MapPin, ArrowUp, Heart } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbout, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070A0F] border-t border-[#1F2733] text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#C5A059]/40 bg-[#161C24] flex items-center justify-center text-[#D4AF37]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                THE VINTAGE MARQUEE
              </span>
            </div>

            <p className="text-[#D4AF37] font-serif text-base italic">
              "{VENUE_INFO.tagline}"
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Islamabad’s premier venue for weddings, receptions, engagement ceremonies, family gatherings, and high-profile corporate celebrations.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-black bg-gradient-to-r from-[#FFF0D0] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 shadow-md cursor-pointer"
                id="footer-book-now-btn"
              >
                Book Your Event Today
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif text-lg font-bold border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('events')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Events & Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-choose-us')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Gallery & Media
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-serif text-lg font-bold border-b border-slate-800 pb-2">
              Contact & Location
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500 text-[11px]">Reservations Line</span>
                  <a
                    href={`tel:${VENUE_INFO.phoneRaw}`}
                    className="font-semibold text-white hover:text-[#D4AF37]"
                  >
                    {VENUE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500 text-[11px]">Venue Address</span>
                  <p className="text-slate-300 leading-snug">
                    {VENUE_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1A222E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{VENUE_INFO.copyright}</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#D4AF37] transition-colors p-2 rounded-lg bg-[#121822] border border-slate-800"
            aria-label="Scroll to top"
            id="back-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
