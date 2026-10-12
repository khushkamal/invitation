export interface WeddingEvent {
  id: string;
  title: string;
  name: string;
  tamilName?: string;
  muhurthamTime?: string;
  tagline: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  mapLink: string;
  attire: string;
  attireColorHex: string;
  description: string;
  image: string;
  illustrationType: 'haldi' | 'mehendi' | 'sangeet' | 'wedding' | 'reception' | 'engagement';
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  caption: string;
  chapter: string;
  category: 'portraits' | 'rituals' | 'sanctum' | 'celebration';
  aspect: 'arch' | 'circle' | 'vertical' | 'wide' | 'classic';
  filmTone?: string;
}

export interface BlessingItem {
  id: string;
  author: string;
  city: string;
  message: string;
  date: string;
}

export interface WeddingSEO {
  title: string;
  description: string;
  canonicalUrl: string;
  siteUrl: string;
  ogImage: string;
  ogImageAlt: string;
  ogType: 'website' | 'article';
  locale: string;
  themeColor: string;
  twitterCard: 'summary' | 'summary_large_image';
  keywords: string[];
  author: string;
  favicon: string;
  appleTouchIcon: string;
}

function createPerson(name: string, fullName: string, parents: string, lineage: string): string & {
  name: string;
  fullName: string;
  parents: string;
  lineage: string;
} {
  const str = new String(name) as any;
  str.name = name;
  str.fullName = fullName;
  str.parents = parents;
  lineage && (str.lineage = lineage);
  return str;
}

function createWeddingDate(date: string, displayDate: string, dateISO: string, time: string, tamilMonth = "Margazhi 3, Subhakruthu Varudam"): string & {
  dateString: string;
  displayDate: string;
  day: string;
  muhurthamTime: string;
  tamilMonth: string;
} {
  const str = new String(date) as any;
  str.dateString = dateISO;
  str.displayDate = displayDate;
  str.day = "Thursday";
  str.muhurthamTime = time;
  str.tamilMonth = tamilMonth;
  return str;
}

export const weddingData = {
  couple: {
    bride: createPerson(
      "Kiran",
      "Kiran Sharma",
      "Mr. [Bride's Father Name] & Mrs. [Bride's Mother Name]",
      "Granddaughter of Mr. [Bride's Grandfather Name] & Mrs. [Bride's Grandmother Name]"
    ),
    groom: createPerson(
      "Rahul",
      "Rahul Verma",
      "Mr. [Father's Name] & Mrs. [Mother's Name]",
      "Grandson of Mr. [Grandfather's Name] & Mrs. [Grandmother's Name]"
    ),
    combinedNames: "Rahul & Kiran",
    weddingTitle: "RAHUL WEDS KIRAN",
    hashtag: "#Rahulkikiran"
  },

  weddingDate: createWeddingDate(
    "17 December 2026",
    "Thursday, 17th December 2026",
    "2026-12-17T11:30:00",
    "11:30 AM (Auspicious Muhurtham)"
  ),

  hero: {
    title: "RAHUL & KIRAN",
    subtitle: "Invite",
    badge: "WEDS",
    requestNote: "With the blessings of God and our beloved parents, we cordially invite you to celebrate the wedding of",
    invocationSanskrit: "॥ ॐ श्री गणेशाय नमः ॥",
    invocationEnglish: "With the divine blessings of Lord Ganesha & our beloved elders"
  },

  invocation: {
    sanskrit: "॥ ॐ श्री गणेशाय नमः ॥",
    english: "With the divine blessings of Lord Ganesha & our beloved elders"
  },

  story: {
    title: "Our Story",
    subtitle: "A Journey Written in the Stars",
    content: "Some souls are destined to find each other, no matter how long the journey. Krishna and Radha's story wasn't just about falling in love—it was about finding peace in each other's presence, strength in every challenge, and a home in each other's hearts. Through every smile, every tear, and every moment in between, their love only grew deeper. Today, as they take the sacred vows of forever, they carry with them not only dreams of a beautiful future but also the blessings of everyone who has been part of their journey. With hearts full of love and gratitude, they invite you to celebrate the beginning of their forever."
  },

  invitation: {
    shloka: "||ॐ श्री गणेशाय नमः||",
    blessingText: "With the blessings of God and our beloved parents,\nwe cordially invite you to grace the auspicious wedding ceremony of their beloved son",
    groomGrandparents: "Mr. [Grandfather's Name] & Mrs. [Grandmother's Name]",
    groomParents: "Mr. [Father's Name] & Mrs. [Mother's Name]",
    brideParents: "Mr. [Bride's Father Name] & Mrs. [Bride's Mother Name]",
    brideGrandparents: "Mr. [Bride's Grandfather Name] & Mrs. [Bride's Grandmother Name]",
    inviteAction: "Invite",
    eventsHeader: "On the following events"
  },

  coupleStory: {
    sectionPretitle: "Meet The",
    sectionTitle: "Bride & Groom",
    scriptTitle: "Our Story",
    narrative: "Some souls are destined to find each other, no matter how long the journey. Krishna and Radha's story wasn't just about falling in love—it was about finding peace in each other's presence, strength in every challenge, and a home in each other's hearts. Through every smile, every tear, and every moment in between, their love only grew deeper. Today, as they take the sacred vows of forever, they carry with them not only dreams of a beautiful future but also the blessings of everyone who has been part of their journey. With hearts full of love and gratitude, they invite you to celebrate the beginning of their forever.",
    slides: [
      "/theartfulinvites/page5_slide1.jpeg",
      "/theartfulinvites/page5_slide2.jpeg",
      "/theartfulinvites/page5_slide3.jpeg",
      "/theartfulinvites/page5_slide4.jpeg"
    ]
  },

  coupleCelestial: {
    scriptTagline: "Together Forever",
    image: "/theartfulinvites/page4_couple_cutout.webp"
  },

  loveStory: [
    {
      chapter: "Scene I",
      title: "The Serendipity",
      year: "December 2021",
      description: "Amidst classical violin strains and sacred blessings, Rahul and Kiran met and knew their souls had found home."
    },
    {
      chapter: "Scene II",
      title: "The Sacred Promise",
      year: "November 2023",
      description: "Under starry skies and whispering breeze, Rahul asked for a lifetime of devotion and companionship."
    },
    {
      chapter: "Scene III",
      title: "The Wedding Celebration",
      year: "December 2026",
      description: "Under the grand wedding mandap, tying the sacred knot to begin their eternal journey together."
    }
  ],

  events: [
    {
      id: "haldi",
      title: "Haldi Ceremony",
      name: "Haldi Ceremony",
      tamilName: "மங்கள ஸ்நானம்",
      tagline: "Turmeric, sunshine & joyful blessings",
      date: "15 December 2026",
      time: "10:00 AM",
      venue: "Taj Hotel",
      address: "Taj Hotel, Mumbai",
      mapsUrl: "https://maps.google.com/?q=Taj+Hotel",
      mapLink: "https://maps.google.com/?q=Taj+Hotel",
      attire: "Sunny Yellow & Floral Festive",
      attireColorHex: "#E5A93C",
      description: "Join us as we celebrate this beautiful occasion with love and blessings.",
      image: "/theartfulinvites/event_haldi.png",
      illustrationType: "haldi" as const
    },
    {
      id: "mehendi",
      title: "Mehendi Night",
      name: "Mehendi Night",
      tamilName: "மருதாணி விழா",
      tagline: "Henna artistry, music & joyous celebration",
      date: "15 December 2026",
      time: "7:00 PM",
      venue: "Taj Hotel",
      address: "Taj Hotel, Mumbai",
      mapsUrl: "https://maps.google.com/?q=Taj+Hotel",
      mapLink: "https://maps.google.com/?q=Taj+Hotel",
      attire: "Festive Pastels & Ethnic Charm",
      attireColorHex: "#2E6B3E",
      description: "An evening of mehendi artistry, music, and family celebration.",
      image: "/theartfulinvites/event_mehendi.webp",
      illustrationType: "mehendi" as const
    },
    {
      id: "sangeet",
      title: "Sangeet Evening",
      name: "Sangeet Evening",
      tamilName: "சங்கீத் உற்சவம்",
      tagline: "Dance, songs, and joy with both families",
      date: "16 December 2026",
      time: "8:00 PM",
      venue: "Taj Hotel",
      address: "Taj Hotel, Mumbai",
      mapsUrl: "https://maps.google.com/?q=Taj+Hotel",
      mapLink: "https://maps.google.com/?q=Taj+Hotel",
      attire: "Royal Glamour & Indo-Western",
      attireColorHex: "#881324",
      description: "Dance, songs, and joy with both families before the wedding day.",
      image: "/theartfulinvites/event_sangeet.webp",
      illustrationType: "sangeet" as const
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      name: "Wedding Ceremony",
      tamilName: "திருக்கல்யாணம்",
      muhurthamTime: "Auspicious Muhurtham: 11:30 AM",
      tagline: "Sacred vows & eternal rituals",
      date: "17 December 2026",
      time: "11:30 AM",
      venue: "Taj Hotel",
      address: "Taj Hotel, Mumbai",
      mapsUrl: "https://maps.google.com/?q=Taj+Hotel",
      mapLink: "https://maps.google.com/?q=Taj+Hotel",
      attire: "Traditional Silk, Sherwani & Zari",
      attireColorHex: "#580B1A",
      description: "Witness our sacred vows and wedding rituals in the presence of loved ones.",
      image: "/theartfulinvites/event_wedding.webp",
      illustrationType: "wedding" as const
    },
    {
      id: "reception",
      title: "Reception Dinner",
      name: "Reception Dinner",
      tamilName: "மகிழ்ச்சி வரவேற்பு",
      tagline: "Dinner, blessings, and heartfelt toasts",
      date: "17 December 2026",
      time: "7:00 PM onwards",
      venue: "Taj Hotel Mumbai",
      address: "Taj Hotel Mumbai",
      mapsUrl: "https://maps.google.com/?q=Taj+Hotel+Mumbai",
      mapLink: "https://maps.google.com/?q=Taj+Hotel+Mumbai",
      attire: "Black Tie & Regal Formals",
      attireColorHex: "#CDAE80",
      description: "Celebrate the newlyweds with dinner, blessings, and heartfelt toasts.",
      image: "/theartfulinvites/event_reception.webp",
      illustrationType: "reception" as const
    }
  ],

  gallery: [
    "/theartfulinvites/page2_bg.webp",
    "/theartfulinvites/page1_temple.webp",
    "/theartfulinvites/page1_sky.webp",
    "/theartfulinvites/page1_tree.webp",
    "/theartfulinvites/page5_bg.webp",
    "/theartfulinvites/page3_bg.webp",
    "/theartfulinvites/page6_bg.webp",
    "/theartfulinvites/gallery_4.webp"
  ],

  galleryItems: [
    {
      id: 'g1',
      chapter: 'Moments of Love',
      title: 'Forever Begins',
      subtitle: 'Kiran & Rahul',
      caption: 'A tender glance and an eternity of shared dreams.',
      image: '/theartfulinvites/page2_bg.webp',
      category: 'portraits' as const,
      aspect: 'arch' as const,
      filmTone: 'Kodak Portra 400 • Golden Morning'
    },
    {
      id: 'g2',
      chapter: 'Our Journey',
      title: 'Serenade of Souls',
      subtitle: 'The Sacred Bond',
      caption: 'Krishna and Radha’s eternal bond mirrored in their love.',
      image: '/theartfulinvites/page1_temple.webp',
      category: 'portraits' as const,
      aspect: 'vertical' as const,
      filmTone: 'Fujifilm Pro 400H • Delicate Detail'
    },
    {
      id: 'g3',
      chapter: 'Elegance',
      title: 'Royal Heritage',
      subtitle: 'Regal Charm',
      caption: 'Wrapped in royal silk and timeless grace.',
      image: '/theartfulinvites/page1_sky.webp',
      category: 'portraits' as const,
      aspect: 'classic' as const,
      filmTone: 'Kodak Ektar 100 • Saturated Reds'
    },
    {
      id: 'g4',
      chapter: 'Celebration',
      title: 'The Artful Glance',
      subtitle: 'Smiles & Laughter',
      caption: 'Celebrating every heartbeat with family and friends.',
      image: '/theartfulinvites/page1_tree.webp',
      category: 'celebration' as const,
      aspect: 'wide' as const,
      filmTone: 'Cinestill 800T • Amber Vilakku Glow'
    }
  ],

  magicTrailImages: [
    "/theartfulinvites/page2_bg.webp",
    "/theartfulinvites/page1_sky.webp",
    "/theartfulinvites/page1_temple.webp",
    "/theartfulinvites/page1_tree.webp",
    "/theartfulinvites/page5_bg.webp",
    "/theartfulinvites/page3_bg.webp",
    "/theartfulinvites/page6_bg.webp",
    "/theartfulinvites/gallery_4.webp"
  ],

  music: "/music/wedding.mp3",
  musicYouTube: "https://www.youtube.com/watch?v=Hcq90DCmTYU",

  venue: {
    name: "Taj Hotel Mumbai",
    temple: "The Grand Ballroom Mandapam",
    address: "Apollo Bunder, Colaba, Mumbai",
    city: "Mumbai",
    state: "Maharashtra, India",
    coordinates: "18.9217° N • 72.8332° E",
    fullAddress: "The Taj Mahal Palace & Tower, Apollo Bunder, Mumbai, Maharashtra 400001",
    mapsUrl: "https://maps.google.com/?q=Taj+Hotel+Mumbai",
    googleMapsUrl: "https://maps.google.com/?q=Taj+Hotel+Mumbai"
  },

  familyBlessing: {
    title: "Meet The Bride & Groom",
    quote: "In the grace of the Almighty and our beloved elders, we seek your presence and auspicious blessings.",
    families: "The Verma & Sharma Families cordially request the honor of your presence.",
    elders: [
      "Mr. [Grandfather's Name] & Mrs. [Grandmother's Name]",
      "Mr. [Bride's Grandfather Name] & Mrs. [Bride's Grandmother Name]",
      "Mr. [Father's Name] & Mrs. [Mother's Name]",
      "Mr. [Bride's Father Name] & Mrs. [Bride's Mother Name]"
    ],
    lineageGroom: "With the blessings of the Almighty and our beloved elders, Mr. [Grandfather's Name] & Mrs. [Grandmother's Name] together with Mr. [Father's Name] & Mrs. [Mother's Name] cordially invite you to grace the auspicious wedding ceremony of their beloved son",
    groomName: "RAHUL",
    wedsText: "WEDS",
    brideName: "KIRAN",
    lineageBride: "beloved daughter of Mr. [Bride's Father Name] & Mrs. [Bride's Mother Name], and granddaughter of Mr. [Bride's Grandfather Name] & Mrs. [Bride's Grandmother Name]."
  },

  blessings: [
    {
      id: "b1",
      author: "Grandfather & Grandmother",
      city: "Family Elders",
      message: "May your union be blessed with love that grows stronger with every passing year, bound by divine harmony and devotion.",
      date: "August 2026"
    },
    {
      id: "b2",
      author: "Loving Parents",
      city: "Home",
      message: "To our dearest Kiran and Rahul: seeing you step into this sacred chapter brings our hearts the purest joy and pride.",
      date: "August 2026"
    }
  ],

  rsvp: {
    title: "Will You Join Us?",
    note: "We would be most honoured to celebrate this day with you. Please let us know if you'll be joining the festivities — your presence is the only gift we need.",
    ctaText: "TAP HERE",
    buttonLabel: "RSVP on WhatsApp",
    phone: "+918819959966",
    message: "I COMMING",
    prefilledMessage: "I COMMING"
  },

  branding: {
    studio: "The Artful Invites",
    instagramHandle: "@theartfulinvites",
    instagramUrl: "https://instagram.com/theartfulinvites",
    hashtag: "#Rahulkikiran"
  },

  seo: {
    title: "KIRAN WEDS RAHUL — Wedding Invitation",
    description: "We're getting married! 💍 Click the link below to view our wedding invitation. We can't wait to celebrate with you!",
    canonicalUrl: "https://theartfulinvitesdemo02.framer.website/",
    siteUrl: "https://theartfulinvitesdemo02.framer.website/",
    ogImage: "/theartfulinvites/hero_og.webp",
    ogImageAlt: "KIRAN WEDS RAHUL — Official Wedding Invitation",
    ogType: "website" as const,
    locale: "en_IN",
    themeColor: "#580B1A",
    twitterCard: "summary_large_image" as const,
    keywords: [
      "Kiran weds Rahul",
      "Rahul and Kiran",
      "The Artful Invites",
      "Wedding Invitation",
      "Prem Ratan Marriage Palace & Resort",
      "December 2026 Wedding"
    ],
    author: "The Artful Invites",
    favicon: "/theartfulinvites/page2_ganesh.webp",
    appleTouchIcon: "/theartfulinvites/page2_ganesh.webp"
  }
};

export type WeddingDataType = typeof weddingData;
