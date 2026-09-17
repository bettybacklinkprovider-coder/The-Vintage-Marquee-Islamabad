import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Clock, Send, MessageSquare, CheckCircle2, Sparkles, Building, User, Mail, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { VENUE_INFO } from '../data/venueData';

interface BookingContactSectionProps {
  onOpenBooking: (eventType?: string) => void;
}

export const BookingContactSection: React.FC<BookingContactSectionProps> = ({ onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Weddings',
    eventDate: '',
    guestCount: 300,
    timeSlot: 'Evening Dinner',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const sendWhatsApp = () => {
    const text = `Hello The Vintage Marquee team,%0A%0AI would like to inquire about booking my event.%0AName: ${formData.fullName || 'Guest'}%0AEvent: ${formData.eventType}%0ADate: ${formData.eventDate || 'TBD'}%0AGuests: ${formData.guestCount}%0APhone: ${formData.phone}`;
    window.open(`https://wa.me/${VENUE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B0F15] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#C5A059]/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C5A059]/30 bg-[#161C24] text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>BOOKING & INQUIRIES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Your Celebration <span className="gold-gradient-text">Starts Here</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Planning your next special event? Let <strong className="text-white">The Vintage Marquee</strong> provide the setting for a celebration filled with beautiful moments, happy memories, and unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact & Venue Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#121822] border border-[#232B36] shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white border-b border-[#232B36] pb-4">
                Call us today to discuss your event.
              </h3>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#161C24] border border-[#C5A059]/30">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">
                    DIRECT PHONE RESERVATIONS
                  </span>
                  <a
                    href={`tel:${VENUE_INFO.phoneRaw}`}
                    className="text-2xl font-bold text-[#D4AF37] hover:text-white transition-colors block mt-0.5"
                    id="contact-phone-link"
                  >
                    {VENUE_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">Available 7 days a week for inquiries</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#161C24] border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">
                    VENUE ADDRESS
                  </span>
                  <p className="text-sm font-semibold text-slate-200 mt-1 leading-snug">
                    {VENUE_INFO.address}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Islamabad Expressway, Pakistan</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#161C24] border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">
                    OFFICE HOURS
                  </span>
                  <p className="text-sm font-semibold text-slate-200 mt-1">
                    {VENUE_INFO.openingHours}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">On-site site visits welcome</p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${VENUE_INFO.phoneRaw}`}
                  className="py-3 px-4 rounded-xl font-semibold text-sm text-center text-[#D4AF37] border border-[#C5A059]/40 bg-[#161C24] hover:bg-[#1C2430] hover:border-[#C5A059] transition-all flex items-center justify-center gap-2"
                  id="contact-call-now-btn"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call Now</span>
                </a>

                <button
                  onClick={() => onOpenBooking()}
                  className="py-3 px-4 rounded-xl font-semibold text-sm text-center text-black bg-gradient-to-r from-[#FFF0D0] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 shadow-lg shadow-[#C5A059]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="contact-book-event-btn"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Event</span>
                </button>
              </div>
            </div>

            {/* Google Maps Card */}
            <div className="rounded-2xl overflow-hidden border border-[#232B36] shadow-xl bg-[#121822] p-2">
              <iframe
                title="The Vintage Marquee Location Map"
                src={VENUE_INFO.mapEmbedUrl}
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Marquees Complex Road, Islamabad Expressway</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Event Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#121822] border border-[#C5A059]/30 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#232B36]">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Event Booking Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fill out your preferences to check date availability and pricing
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#D4AF37] text-xs font-semibold">
                  Instant Response
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#D4AF37] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-3xl font-bold text-white">
                    Inquiry Received!
                  </h4>
                  <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName || 'Guest'}</strong>. Our event management team at <strong className="text-[#D4AF37]">The Vintage Marquee</strong> will reach out to you shortly at <span className="text-white">{formData.phone}</span>.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={sendWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-black bg-[#25D366] hover:bg-[#22bf5b] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Directly</span>
                    </button>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 border border-slate-700 hover:text-white transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Tariq Mehmood"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#161C24] border border-[#232B36] focus:border-[#C5A059] text-white text-sm outline-none transition-colors"
                          id="form-full-name"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                        Phone / Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="+92 300 1234567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#161C24] border border-[#232B36] focus:border-[#C5A059] text-white text-sm outline-none transition-colors"
                          id="form-phone"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Event Type */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                        Event Category
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#161C24] border border-[#232B36] focus:border-[#C5A059] text-white text-sm outline-none transition-colors appearance-none cursor-pointer"
                          id="form-event-type"
                        >
                          <option value="Weddings">Weddings (Barat / Nikkah)</option>
                          <option value="Receptions">Receptions (Walima)</option>
                          <option value="Engagements">Engagements & Family Events</option>
                          <option value="Corporate Events">Corporate Events & Galas</option>
                          <option value="Others">Other Celebrations</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                        Expected Event Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          required
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#161C24] border border-[#232B36] focus:border-[#C5A059] text-white text-sm outline-none transition-colors"
                          id="form-event-date"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Guest Count */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                        Estimated Guest Count ({formData.guestCount} Guests)
                      </label>
                      <div className="flex items-center gap-3 bg-[#161C24] p-2 rounded-xl border border-[#232B36]">
                        <Users className="w-4 h-4 text-slate-500 ml-2" />
                        <input
                          type="range"
                          min="100"
                          max="1500"
                          step="50"
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                          className="w-full accent-[#C5A059] cursor-pointer"
                          id="form-guest-slider"
                        />
                        <span className="text-xs font-bold text-[#D4AF37] px-2 py-1 bg-black rounded">
                          {formData.guestCount}
                        </span>
                      </div>
                    </div>

                    {/* Time Slot */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                        Time Slot
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: 'Lunch' as any })}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border cursor-pointer ${
                            formData.timeSlot === 'Lunch'
                              ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#D4AF37]'
                              : 'bg-[#161C24] border-[#232B36] text-slate-400'
                          }`}
                        >
                          Lunch (Day)
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: 'Evening Dinner' as any })}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border cursor-pointer ${
                            formData.timeSlot === 'Evening Dinner'
                              ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#D4AF37]'
                              : 'bg-[#161C24] border-[#232B36] text-slate-400'
                          }`}
                        >
                          Dinner (Night)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                      Special Decor / Menu Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Stage floral themes, specific menu dishes, live bbq setups..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#161C24] border border-[#232B36] focus:border-[#C5A059] text-white text-sm outline-none transition-colors"
                      id="form-notes"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#FFF0D0] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 shadow-lg shadow-[#C5A059]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      id="submit-inquiry-btn"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Booking Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={sendWhatsApp}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366] hover:text-black transition-all flex items-center justify-center gap-2 cursor-pointer"
                      id="whatsapp-inquiry-btn"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
