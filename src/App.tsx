import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WelcomeSection } from './components/WelcomeSection';
import { EventsServicesSection } from './components/EventsServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { GallerySection } from './components/GallerySection';
import { BookingContactSection } from './components/BookingContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { EventDetailModal } from './components/EventDetailModal';
import { AboutModal } from './components/AboutModal';
import { EventService } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState<string>('Weddings');
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [selectedEventDetail, setSelectedEventDetail] = useState<EventService | null>(null);

  const handleOpenBooking = (eventType?: string) => {
    if (eventType) {
      setSelectedEventType(eventType);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0F15] text-[#E8ECEF] font-sans antialiased selection:bg-[#C5A059] selection:text-black flex flex-col justify-between">
      {/* Sticky Top Header Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      {/* Main Homepage Sections */}
      <main className="flex-grow">
        {/* Section 1 — Hero */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section 2 — Welcome */}
        <WelcomeSection
          onOpenAbout={() => setAboutModalOpen(true)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 3 — Events & Services */}
        <EventsServicesSection
          onSelectEvent={(event) => setSelectedEventDetail(event)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Section 4 — Why Choose Us */}
        <WhyChooseUsSection />

        {/* Section 5 — Gallery Preview */}
        <GallerySection />

        {/* Section 6 — Booking CTA & Contact */}
        <BookingContactSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialEventType={selectedEventType}
      />

      <EventDetailModal
        event={selectedEventDetail}
        onClose={() => setSelectedEventDetail(null)}
        onOpenBooking={handleOpenBooking}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
