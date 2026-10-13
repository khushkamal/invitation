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

export const weddingData = {
  couple: {
    groom: {
      name: "Rahul",
      fullName: "Rahul Verma",
      role: "Groom",
      parents: "Mr. Ramesh Verma & Mrs. Sunita Verma",
      grandparents: "Late Mr. Om Prakash Verma & Mrs. Shanti Verma",
      bio: "An architect with a passion for heritage preservation, seeking eternal companionship."
    },
    bride: {
      name: "Kiran",
      fullName: "Kiran Sharma",
      role: "Bride",
      parents: "Mr. Rajesh Sharma & Mrs. Anita Sharma",
      grandparents: "Late Mr. Harish Chandra Sharma & Mrs. Kaushalya Sharma",
      bio: "A classical vocalist and curator of Indian art, stepping into a sacred union."
    },
    combinedNames: "Kiran & Rahul",
    weddingDate: "17 December 2026",
    tagline: "An invitation to witness the sacred union of two souls under divine grace.",
    hashtag: "#Rahulkikiran"
  },

  weddingDate: {
    year: 2026,
    month: "December",
    day: 17,
    fullDisplay: "17 December 2026",
    time: "11:30 AM",
    dateString: "2026-12-17T11:30:00+05:30",
    timezone: "Asia/Kolkata"
  },

  invitation: {
    invocation: "॥ ॐ श्री गणेशाय नमः ॥",
    openingBlessing: "With the blessings of God and our beloved parents, we cordially",
    action: "Invite",
    groomBlessingIntro: "With the blessings of the Almighty and our beloved elders,",
    groomGrandparents: "Mr. [Grandfather's Name] & Mrs. [Grandmother's Name]",
    conjunction: "together with",
    groomParents: "Mr. [Father's Name] & Mrs. [Mother's Name]",
    groomLine: "cordially invite you to grace the auspicious wedding ceremony of their beloved son",
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
      "/invitation/page5_slide1.jpeg",
      "/invitation/page5_slide2.jpeg",
      "/invitation/page5_slide3.jpeg",
      "/invitation/page5_slide4.jpeg"
    ]
  },

  coupleCelestial: {
    scriptTagline: "Together Forever",
    image: "/invitation/page4_couple_cutout.webp"
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
      image: "/invitation/event_haldi.png",
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
      image: "/invitation/event_mehendi.webp",
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
      image: "/invitation/event_sangeet.webp",
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
      image: "/invitation/event_wedding.webp",
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
      mapsUrl: "https://maps.google.com/?q=Taj+Hotel Mumbai",
      mapLink: "https://maps.google.com/?q=Taj+Hotel Mumbai",
      attire: "Black Tie & Regal Formals",
      attireColorHex: "#CDAE80",
      description: "Celebrate the newlyweds with dinner, blessings, and heartfelt toasts.",
      image: "/invitation/event_reception.webp",
      illustrationType: "reception" as const
    }
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

  rsvp: {
    title: "Will You Join Us?",
    note: "We would be truly honoured to celebrate this day with you. Please let us know if you'll be joining the festivities — your presence is the only gift we need.",
    ctaText: "TAP HERE",
    buttonLabel: "RSVP on WhatsApp",
    phone: "+918819959966",
    message: "Namaste! We are delighted to confirm our attendance for the wedding celebrations of Rahul & Kiran. Looking forward to celebrating together!",
    prefilledMessage: "Namaste! We are delighted to confirm our attendance for the wedding celebrations of Rahul & Kiran. Looking forward to celebrating together!"
  },

  branding: {
    studio: "Rahul & Kiran Wedding",
    instagramHandle: "@rahulkikiran",
    instagramUrl: "https://instagram.com/rahulkikiran",
    hashtag: "#Rahulkikiran"
  },

  seo: {
    title: "KIRAN WEDS RAHUL — Wedding Invitation",
    description: "We're getting married! 💍 Click the link below to view our wedding invitation. We can't wait to celebrate with you!",
    canonicalUrl: "https://rahulkikiran.wedding/",
    siteUrl: "https://rahulkikiran.wedding/",
    ogImage: "/invitation/hero_og.webp",
    ogImageAlt: "KIRAN WEDS RAHUL — Official Wedding Invitation",
    ogType: "website" as const,
    locale: "en_IN",
    themeColor: "#580B1A",
    twitterCard: "summary_large_image" as const,
    keywords: [
      "Kiran weds Rahul",
      "Rahul and Kiran",
      "Wedding Invitation",
      "Prem Ratan Marriage Palace & Resort",
      "December 2026 Wedding"
    ],
    author: "Rahul & Kiran",
    favicon: "/invitation/page2_ganesh.webp",
    appleTouchIcon: "/invitation/page2_ganesh.webp"
  }
};

export type WeddingDataType = typeof weddingData;
