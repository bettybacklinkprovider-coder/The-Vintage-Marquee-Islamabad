import React from 'react';
import { ArrowRight, Sparkles, Heart, Gift, Building2, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { EVENT_SERVICES } from '../data/venueData';
import { EventService } from '../types';

interface EventsServicesSectionProps {
  onSelectEvent: (event: EventService) => void;
  onOpenBooking: (eventType?: string) => void;
}

export const EventsServicesSection: React.FC<EventsServicesSectionProps> = ({
  onSelectEvent,
  onOpenBooking
}) => {
  const getEventIcon = (id: string) => {
    switch (id) {
      case 'weddings':
        return <Heart className="w-5 h-5 text-[#D4AF37]" />;
      case 'receptions':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'engagements':
        return <Gift className="w-5 h-5 text-[#D4AF37]" />;
      case 'corporate':
        return <Building2 className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Users className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="events" className="py-20 md:py-28 bg-[#121822] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C5A059]/30 bg-[#161C24] text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>OUR EVENT OFFERINGS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Celebrate Every <span className="gold-gradient-text">Special Occasion</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Tailored venue solutions and customized hospitality designed to turn your milestones into cherished, lifelong memories.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EVENT_SERVICES.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#161C24] border border-[#232B36] hover:border-[#C5A059]/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#C5A059]/10 transition-all duration-300 flex flex-col group"
            >
              {/* Event Cover Image */}
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161C24] via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B0F15]/80 backdrop-blur-md border border-[#C5A059]/40 text-xs font-semibold text-[#D4AF37]">
                  {getEventIcon(event.id)}
                  <span>{event.category}</span>
                </div>

                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-md bg-[#161C24]/90 text-xs text-slate-300 border border-slate-700">
                  {event.capacityRange}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-3">
                    {event.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {event.shortDesc}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#232B36] flex items-center justify-between gap-4">
                  <button
                    onClick={() => onSelectEvent(event)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:text-white transition-colors cursor-pointer group/btn"
                    id={`event-learn-more-${event.id}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(event.title)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#232B36] hover:bg-[#C5A059] hover:text-black transition-all cursor-pointer"
                    id={`event-book-direct-${event.id}`}
                  >
                    Book This Event
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
