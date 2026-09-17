import React from 'react';
import { X, CheckCircle2, Calendar, Users, Sparkles, ArrowRight } from 'lucide-react';
import { EventService } from '../types';

interface EventDetailModalProps {
  event: EventService | null;
  onClose: () => void;
  onOpenBooking: (eventType?: string) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  onClose,
  onOpenBooking
}) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#121822] border border-[#C5A059]/40 rounded-2xl overflow-hidden shadow-2xl text-slate-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#0B0F15]/80 border border-slate-700 text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
          aria-label="Close modal"
          id="close-event-detail-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121822] via-[#121822]/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F15]/90 border border-[#C5A059]/40 text-xs font-semibold text-[#D4AF37] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{event.category}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {event.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {event.fullDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-[#161C24] border border-[#232B36]">
            <div>
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">
                GUEST CAPACITY RANGE
              </span>
              <p className="text-lg font-bold text-white font-serif mt-0.5">
                {event.capacityRange}
              </p>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">
                HALL ENVIRONMENT
              </span>
              <p className="text-lg font-bold text-[#D4AF37] font-serif mt-0.5">
                100% Air-Conditioned & Heated
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-3">
              Included Service Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {event.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Addons */}
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-2">
              Popular Customization Add-ons
            </h4>
            <div className="flex flex-wrap gap-2">
              {event.popularAddons.map((addon, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-[#161C24] border border-slate-700 text-xs text-slate-300 font-medium"
                >
                  + {addon}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[#232B36] flex flex-col sm:flex-row gap-4 items-center justify-between">
            <a
              href="tel:+923011229333"
              className="text-sm font-semibold text-[#D4AF37] hover:underline"
            >
              Direct Inquiry: +92 301 1229333
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenBooking(event.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#FFF0D0] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 shadow-lg shadow-[#C5A059]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="event-modal-book-now-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book {event.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
