import React from 'react';
import { X, Sparkles, MapPin, Phone, ShieldCheck, CheckCircle2, Award, Calendar } from 'lucide-react';
import { VENUE_INFO, VENUE_SPECS } from '../data/venueData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#121822] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#161C24] border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
          id="close-about-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#232B36]">
          <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#D4AF37]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">
              About The Vintage Marquee
            </h3>
            <p className="text-xs text-slate-400">
              Islamabad's Premier Luxury Celebration Destination
            </p>
          </div>
        </div>

        {/* Story & Specifications */}
        <div className="space-y-6">
          <p className="text-slate-300 text-base leading-relaxed">
            At <strong className="text-white">The Vintage Marquee</strong>, every celebration deserves a beautiful setting. Our venue provides an elegant atmosphere where your special moments can be celebrated with comfort, style, and meticulous attention to detail.
          </p>

          <p className="text-slate-300 text-sm leading-relaxed">
            Located conveniently on Marquees Complex Road before Burki PSO Station along Islamabad Expressway, our facility offers easy access from both Islamabad and Rawalpindi. Designed with grand architectural arches, soaring ceilings, and opulent crystal chandeliers, we host everything from grand Barat & Walima receptions to high-profile corporate galas.
          </p>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#161C24] border border-[#232B36]">
              <span className="block text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-1">
                GUEST CAPACITY
              </span>
              <p className="text-base font-bold text-white">
                {VENUE_SPECS.totalCapacity}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#161C24] border border-[#232B36]">
              <span className="block text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-1">
                HALL SPECIFICATION
              </span>
              <p className="text-base font-bold text-white">
                {VENUE_SPECS.hallDimensions}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#161C24] border border-[#232B36]">
              <span className="block text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-1">
                PARKING & VALET
              </span>
              <p className="text-base font-bold text-white">
                {VENUE_SPECS.parkingSpaces}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#161C24] border border-[#232B36]">
              <span className="block text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-1">
                POWER BACKUP
              </span>
              <p className="text-base font-bold text-white">
                100% Uninterrupted Heavy Generator
              </p>
            </div>
          </div>

          {/* Amenities List */}
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-3">
              Venue Amenities & Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
              {VENUE_SPECS.amenities.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Bar */}
          <div className="p-4 rounded-xl bg-[#161C24] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block">FOR SITE VISITS & RESERVATIONS</span>
              <span className="text-lg font-bold text-[#D4AF37]">{VENUE_INFO.phone}</span>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-xs font-bold text-black bg-gradient-to-r from-[#FFF0D0] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 transition-all cursor-pointer"
                id="about-modal-book-btn"
              >
                Book Your Event
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
