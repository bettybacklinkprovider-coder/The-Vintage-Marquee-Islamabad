export type EventCategory = 'Weddings' | 'Receptions' | 'Engagements' | 'Family Events' | 'Corporate Events' | 'Venue Décor';

export interface EventService {
  id: string;
  title: string;
  category: EventCategory;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  capacityRange: string;
  popularAddons: string[];
}

export interface WhyChoosePillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  detail: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: EventCategory;
  image: string;
  caption: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  timeSlot: 'Lunch' | 'Dinner' | 'Full Day';
  specialRequirements: string;
}

export interface VenueSpecs {
  totalCapacity: string;
  hallDimensions: string;
  parkingSpaces: string;
  cateringTypes: string[];
  amenities: string[];
}
