import { EventService, WhyChoosePillar, GalleryItem, VenueSpecs } from '../types';

export const VENUE_INFO = {
  name: 'The Vintage Marquee',
  tagline: 'Elegant celebrations. Beautiful memories.',
  phone: '+92 301 1229333',
  phoneRaw: '+923011229333',
  whatsapp: '+923011229333',
  address: 'Before Burki PSO Station, Marquees Complex Road, Islamabad Expy, Nawaz, Islamabad, Pakistan',
  city: 'Islamabad, Pakistan',
  email: 'info@vintagemarquee.pk',
  openingHours: 'Mon - Sun: 10:00 AM - 11:00 PM',
  mapEmbedUrl: 'https://maps.google.com/maps?q=33.6415,73.1189&z=15&output=embed',
  copyright: '© 2026 The Vintage Marquee. All Rights Reserved.'
};

export const VENUE_SPECS: VenueSpecs = {
  totalCapacity: 'Up to 1,500 Guests',
  hallDimensions: '18,000 sq ft Fully Air-Conditioned / Heated Pillarless Hall',
  parkingSpaces: '300+ Vehicles with Valet Parking Facility',
  cateringTypes: [
    'Traditional Pakistani Royal Buffet',
    'Modern Continental & Live Barbecue',
    'Customized Culinary Experiences',
    'High Tea & Cocktail Receptions'
  ],
  amenities: [
    'VIP Bridal & Groom Suites',
    'Advanced LED Wall & Intelligent Stage Lighting',
    'Uninterrupted Power Backup (Heavy Generators)',
    'Floral & Crystal Chandelier Decor Options',
    'Dedicated Event Coordinator',
    'Prayer Hall & Dedicated Security Staff'
  ]
};

export const EVENT_SERVICES: EventService[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    category: 'Weddings',
    shortDesc: "Create the wedding celebration you've always imagined with an elegant venue, beautiful surroundings, and a memorable atmosphere for you and your guests.",
    fullDesc: 'Your wedding day is one of life\'s most cherished milestones. At The Vintage Marquee, we specialize in transforming grand wedding visions into effortless reality. Featuring lavish crystal lighting, grand stage setups, red carpet entryways, and royal culinary spreads, our venue provides an majestic backdrop for Barat, Walima, and Nikkah ceremonies.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Bespoke Stage & Floral Backdrops',
      'Dedicated Bridal Suite with Private Dressing Room',
      'Red Carpet Floral Walkway & Entry Tunnel',
      'Customized Lighting Control & Sound System'
    ],
    capacityRange: '200 to 1,500 Guests',
    popularAddons: ['360 Photo Booth', 'Cold Pyro & Fog Entry Effects', 'Live Barbecue Counters']
  },
  {
    id: 'receptions',
    title: 'Receptions',
    category: 'Receptions',
    shortDesc: 'Celebrate your new beginning with a sophisticated reception setup designed for a wonderful evening with family and friends.',
    fullDesc: 'Host a magnificent reception evening that leaves a lasting impression on your guests. From elegant dinner seating arrangements to mood lighting and fine dining presentation, our reception hosting ensures a seamless, grand experience tailored to your style.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Luxury Banquet Table Setups & Fine Linen',
      'Ambient Chandelier & Warm Accent Lighting',
      'Custom Buffet & Live Cooking Stations',
      'Spacious Dance & Stage Layouts'
    ],
    capacityRange: '150 to 1,200 Guests',
    popularAddons: ['Gourmet Dessert Corner', 'Mocktail & Espresso Bar', 'Violin / Soft Instrumental Acoustic Setup']
  },
  {
    id: 'engagements',
    title: 'Engagements & Family Events',
    category: 'Engagements',
    shortDesc: 'From engagement ceremonies to birthdays, anniversaries, and family gatherings, our venue provides a beautiful setting for meaningful celebrations.',
    fullDesc: 'Whether you are celebrating a ring ceremony, a milestone 50th wedding anniversary, or a joyous family reunion, The Vintage Marquee offers versatile seating layouts that cater to both intimate family gatherings and grand celebrations.',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Versatile Modular Layouts for Intimate or Medium Events',
      'Photo Wall & Backdrop Decoration',
      'Kid-friendly & Senior-accessible Space Design',
      'Custom Cake Presentation & Cutting Stage'
    ],
    capacityRange: '100 to 800 Guests',
    popularAddons: ['Customized Photo Wall', 'High Tea Buffet', 'Memory Video Projection']
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    category: 'Corporate Events',
    shortDesc: 'Host professional dinners, meetings, gatherings, and corporate celebrations in a comfortable and sophisticated environment.',
    fullDesc: 'Elegance meets executive professionalism at The Vintage Marquee. Perfect for annual corporate galas, product launches, award ceremonies, high-profile conferences, and executive dinners. Equipped with modern audio-visual infrastructure and high-speed Wi-Fi.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    features: [
      'High-Definition LED Screen & Stage Sound System',
      'Executive Seating & Round Table Layouts',
      'Dedicated Registration Desk & Guest Reception Area',
      'High-Speed Wi-Fi & AV Technician On-Site'
    ],
    capacityRange: '100 to 1,500 Delegates',
    popularAddons: ['Corporate Branding Banners', 'Podium & Wireless Microphones', 'Executive Buffet Dinner']
  }
];

export const WHY_CHOOSE_PILLARS: WhyChoosePillar[] = [
  {
    id: '1',
    title: 'Elegant Atmosphere',
    description: 'Enjoy a refined and welcoming environment for your special occasion.',
    iconName: 'Sparkles',
    detail: 'Architectural grandeur with soaring ceilings, luxury chandeliers, and warm accent illumination designed to impress.'
  },
  {
    id: '2',
    title: 'Spacious Event Area',
    description: 'A comfortable venue designed to accommodate your guests and celebration.',
    iconName: 'Maximize2',
    detail: 'Over 18,000 sq ft of pillarless hall space allowing flexible seating arrangements, wide aisle walkways, and grand stage displays.'
  },
  {
    id: '3',
    title: 'Beautiful Décor',
    description: 'Create an impressive event atmosphere with stylish décor and presentation.',
    iconName: 'Flower2',
    detail: 'From traditional royal floral themes to modern minimalist crystal setups, our decorators bring your dream aesthetic to life.'
  },
  {
    id: '4',
    title: 'Professional Service',
    description: 'Our focus is on providing a smooth and enjoyable experience for you and your guests.',
    iconName: 'Award',
    detail: 'Experienced hospitality managers, attentive waitstaff, and dedicated event coordinators managing every detail.'
  },
  {
    id: '5',
    title: 'Comfortable Guest Experience',
    description: 'Give your guests a welcoming environment where they can relax and celebrate.',
    iconName: 'HeartHandshake',
    detail: 'Climate-controlled air conditioning/heating, plush banquet chairs, clean luxury restrooms, and VIP lounge areas.'
  },
  {
    id: '6',
    title: 'Convenient Islamabad Location',
    description: 'Our location provides convenient access for guests attending your event.',
    iconName: 'MapPin',
    detail: 'Situated on Marquees Complex Road off Islamabad Expressway, easily accessible from all sectors of Islamabad and Rawalpindi.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Royal Wedding Stage setup',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    caption: 'Grand stage decoration with warm golden lighting and lush floral draping.'
  },
  {
    id: 'g2',
    title: 'Banquet Hall Dining Arrangement',
    category: 'Receptions',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    caption: 'Luxury round table banquet setup with fine cutlery and golden charger plates.'
  },
  {
    id: 'g3',
    title: 'Ring Ceremony Backdrop',
    category: 'Engagements',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop',
    caption: 'Intimate engagement floral archway with fairy lights and customized acrylic signage.'
  },
  {
    id: 'g4',
    title: 'Corporate Award Ceremony Layout',
    category: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    caption: 'Professional corporate seating with LED backdrop and crisp stage lighting.'
  },
  {
    id: 'g5',
    title: 'Crystal Chandelier Ceiling',
    category: 'Venue Décor',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop',
    caption: 'Soaring ceiling adorned with opulent crystal chandeliers and draped ceiling silk.'
  },
  {
    id: 'g6',
    title: 'Family Anniversary Banquet',
    category: 'Family Events',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop',
    caption: 'Warm and memorable family celebration setup with custom dessert table.'
  },
  {
    id: 'g7',
    title: 'Red Carpet Entrance Walkway',
    category: 'Venue Décor',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop',
    caption: 'Welcoming red carpet entrance with ambient lanterns and fresh flower pillars.'
  },
  {
    id: 'g8',
    title: 'Nighttime Marquee Exterior',
    category: 'Venue Décor',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
    caption: 'Illuminated venue exterior on Marquees Complex Road, Islamabad.'
  },
  {
    id: 'g9',
    title: 'Traditional Henna / Mehndi Stage',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
    caption: 'Vibrant marigold and ethnic decor setup for Mehndi and Sangeet nights.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Chaudhry Tariq & Family',
    event: 'Walima Ceremony',
    rating: 5,
    review: 'The Vintage Marquee made my son\'s Walima truly unforgettable. The ambiance was stunning, food was served piping hot, and the staff handled 800+ guests effortlessly.'
  },
  {
    name: 'Dr. Ayesha & Hamza',
    event: 'Grand Wedding Barat',
    rating: 5,
    review: 'From the moment our guests arrived on Marquees Complex Road, everything was top-class. The lighting, AC performance, and stage decor surpassed our expectations!'
  },
  {
    name: 'Salman Rashid',
    event: 'Corporate Annual Gala',
    rating: 5,
    review: 'Outstanding venue for corporate gatherings. The AV system worked flawlessly, parking was quick and organized, and the catering was praised by all executive attendees.'
  }
];
