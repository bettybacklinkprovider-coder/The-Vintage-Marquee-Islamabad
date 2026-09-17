import React, { useState } from 'react';
import { X, Calendar, Phone, MessageSquare, CheckCircle2, Sparkles, Clock, Users, ShieldCheck, DollarSign } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEventType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialEventType = 'Weddings'
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: initialEventType || 'Weddings',
    eventDate: '',
    guestCount: 300,
    timeSlot: 'Dinner',
    cateringPackage: 'Standard Royal Buffet',
    specialNotes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sendWhatsApp = () => {
    const text = `Hello The Vintage Marquee team,%0A%0AI would like to reserve an event date.%0AName: ${formData.fullName || 'Guest'}%0AEvent: ${formData.eventType}%0ADate: ${formData.eventDate || 'TBD'}%0AGuests: ${formData.guestCount}%0ASlot: ${formData.timeSlot}%0APhone: ${formData.phone}`;
    window.open(`https://wa.me/${VENUE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  // Simple pricing estimate calculation for Islamabad venues
  const perGuestEst = formData.cateringPackage === 'Royal Deluxe Buffet' ? 2800 : 2200;
  const totalEst = formData.guestCount * perGuestEst;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121822] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#161C24] border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
          id="close-booking-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#232B36]">
          <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#D4AF37]">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Book Your Event
            </h3>
            <p className="text-xs text-slate-400">
              The Vintage Marquee, Islamabad Expressway
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#D4AF37] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-3xl font-bold text-white">
              Reservation Request Sent!
            </h4>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you for choosing <strong className="text-white">The Vintage Marquee</strong>. Our management team will contact you at <span className="text-[#D4AF37] font-semibold">{formData.phone}</span> to confirm date availability and arrange an optional venue tour.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={sendWhatsApp}
                className="px-6 py-3 rounded-xl font-bold text-sm text-black bg-[#25D366] hover:bg-[#22bf5b] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 border border-slate-700 hover:text-white transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chaudhry Tariq"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161C24] border border-[#232B36] focus:border-[#C5A059] text-white text-sm outline-none"
                  id="modal-name-input"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+92 301 1229333"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161C24] border border-[#232B36] focus:border-[#C5A059] text-white text-sm outline-none"
                  id="modal-phone-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                  Event Category
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161C24] border border-[#232B36] focus:border-[#C5A059] text-white text-sm outline-none"
                  id="modal-event-type-select"
                >
                  <option value="Weddings">Weddings (Barat / Nikkah)</option>
                  <option value="Receptions">Receptions (Walima)</option>
                  <option value="Engagements">Engagements & Family Events</option>
                  <option value="Corporate Events">Corporate Events & Dinner</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                  Event Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161C24] border border-[#232B36] focus:border-[#C5A059] text-white text-sm outline-none"
                  id="modal-date-input"
                />
              </div>
            </div>

            {/* Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold uppercase text-slate-300">
                  Guest Capacity
                </label>
                <span className="text-xs font-bold text-[#D4AF37]">
                  {formData.guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="1500"
                step="50"
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                className="w-full accent-[#C5A059] cursor-pointer"
                id="modal-guest-slider"
              />
            </div>

            {/* Quick Pricing Estimate Box */}
            <div className="p-4 rounded-xl bg-[#161C24] border border-[#C5A059]/30 flex items-center justify-between">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-slate-400">
                  ESTIMATED BUDGET INDICATOR
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  ~ PKR {totalEst.toLocaleString()} <span className="text-xs text-slate-400">({formData.guestCount} Guests)</span>
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#C5A059] block font-medium">CUSTOMIZABLE MENU</span>
                <span className="text-xs text-slate-400">Includes Hall & Decor</span>
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                Special Requests / Decor Preferences
              </label>
              <textarea
                rows={2}
                placeholder="Mention any specific menu items, stage backdrop themes, or sound preferences..."
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                className="w-full p-3 rounded-xl bg-[#161C24] border border-[#232B36] focus:border-[#C5A059] text-white text-sm outline-none"
                id="modal-notes-input"
              />
            </div>

            {/* Submit Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#FFF0D0] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 shadow-lg shadow-[#C5A059]/20 transition-all cursor-pointer"
                id="modal-submit-btn"
              >
                Confirm & Submit Booking
              </button>

              <button
                type="button"
                onClick={sendWhatsApp}
                className="px-5 py-3 rounded-xl font-semibold text-sm text-white bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366] hover:text-black transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="modal-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
