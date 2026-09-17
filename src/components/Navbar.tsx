import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

interface NavbarProps {
  onOpenBooking: (eventType?: string) => void;
  onOpenAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAbout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F15]/95 backdrop-blur-md border-b border-[#232B36] py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 text-left group focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-full border border-[#C5A059]/40 bg-[#161C24] flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] group-hover:scale-105 transition-all">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                THE VINTAGE
              </span>
              <span className="block text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                MARQUEE ISLAMABAD
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
              id="nav-home-btn"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection('welcome');
              }}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
              id="nav-welcome-btn"
            >
              Welcome
            </button>
            <button
              onClick={onOpenAbout}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
              id="nav-about-btn"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
              id="nav-events-btn"
            >
              Events & Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
              id="nav-why-btn"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
              id="nav-gallery-btn"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
              id="nav-contact-btn"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${VENUE_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-[#D4AF37] hover:text-white px-3 py-2 rounded-lg border border-[#C5A059]/30 hover:border-[#C5A059] bg-[#161C24]/80 transition-all"
              id="navbar-phone-btn"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>{VENUE_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-black bg-gradient-to-r from-[#FFF0D0] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 shadow-lg shadow-[#C5A059]/20 transition-all cursor-pointer"
              id="navbar-book-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Event</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${VENUE_INFO.phoneRaw}`}
              className="p-2 rounded-lg border border-[#C5A059]/40 text-[#D4AF37] bg-[#161C24]"
              aria-label="Call Us"
              id="mobile-phone-quick-btn"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-[#D4AF37] focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F15] border-b border-[#232B36] px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col space-y-3 font-medium text-base text-slate-200">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 hover:text-[#D4AF37] border-b border-slate-800/60"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('welcome')}
              className="text-left py-2 hover:text-[#D4AF37] border-b border-slate-800/60"
            >
              Welcome
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAbout();
              }}
              className="text-left py-2 hover:text-[#D4AF37] border-b border-slate-800/60"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="text-left py-2 hover:text-[#D4AF37] border-b border-slate-800/60"
            >
              Events & Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-left py-2 hover:text-[#D4AF37] border-b border-slate-800/60"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-left py-2 hover:text-[#D4AF37] border-b border-slate-800/60"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 hover:text-[#D4AF37]"
            >
              Contact
            </button>
          </div>

          <div className="pt-4 space-y-3 border-t border-[#232B36]">
            <a
              href={`tel:${VENUE_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-[#C5A059]/50 text-[#D4AF37] bg-[#161C24] font-semibold"
            >
              <Phone className="w-5 h-5 text-[#C5A059]" />
              <span>Call Us: {VENUE_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-black bg-gradient-to-r from-[#FFF0D0] via-[#D4AF37] to-[#AA7C11] font-semibold shadow-lg shadow-[#C5A059]/20"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Event</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
