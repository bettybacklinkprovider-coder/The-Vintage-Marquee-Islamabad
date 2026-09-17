import React from 'react';
import { Sparkles, Maximize2, Flower2, Award, HeartHandshake, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_PILLARS } from '../data/venueData';

export const WhyChooseUsSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'Maximize2':
        return <Maximize2 className="w-6 h-6 text-[#D4AF37]" />;
      case 'Flower2':
        return <Flower2 className="w-6 h-6 text-[#D4AF37]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#D4AF37]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#0B0F15] relative overflow-hidden">
      {/* Golden Radial Light Accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#C5A059]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C5A059]/30 bg-[#161C24] text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>WHY CHOOSE US</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            A Venue Made for <span className="gold-gradient-text">Memorable Celebrations</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Discover why families and corporate organizations in Islamabad choose The Vintage Marquee for their most treasured moments.
          </p>
        </div>

        {/* 6 Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-8 rounded-2xl bg-[#121822] border border-[#232B36] hover:border-[#C5A059]/50 hover:bg-[#161C24] transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#1A222E] border border-[#C5A059]/30 flex items-center justify-center mb-6 group-hover:border-[#C5A059] group-hover:scale-110 transition-all duration-300 shadow-md">
                  {getPillarIcon(pillar.iconName)}
                </div>

                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-3">
                  {pillar.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed italic">
                {pillar.detail}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
