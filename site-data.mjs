const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
  basePath: publicBase,

  brand: {
    name: "",
    subtitle: "",
    monogram: "",
  },

  template: {
    bookingProvider: "",
    reviewSource: "",
    categoryLabels: {
      manicure: "",
      pedicure: "",
      podology: "",
      training: "",
    },
  },

  master: {
    name: "",
    dative: "",
    genitive: "",
    instrumental: "",
    monogram: "",
    profession: "",
    heroTitle: "",
    heroEmphasis: "",
    heroCaption: "",
    imageAlt: "",
    heroCopy: "",
    experienceYears: "",
    experienceAria: "",
    aboutTitle: "",
    aboutLead: "",
    aboutParagraphs: [],
    skills: [],
  },

  location: {
    city: "",
    metro: "",
    cityMetro: "",
    address: "",
    mapCardAddress: "",
    schedule: "",
    scheduleCapitalized: "",
    timeZone: "UTC",
    openTime: "00:00",
    closeTime: "00:00",
  },

  contacts: {
    phoneDisplay: "",
    phoneHref: "#",
    personalTelegramUrl: "#",
    channelTelegramUrl: "#",
    vkUrl: "#",
  },

  links: {
    bookingUrl: "#",
    bookingWidgetScriptUrl: "/noop.js",
    reviewsUrl: "#",
    mapUrl: "#",
    routeUrl: "#",
    mobileMapEmbedUrl: "about:blank",
    desktopMapEmbedUrl: "about:blank",
    yandexMapHrefMatch: "__tanem_map_not_configured__",
  },

  reputation: {
    rating: "",
    reviewCount: "",
  },

  images: {
    portrait: `${publicBase}/placeholder.svg`,
    about: `${publicBase}/placeholder.svg`,
    favicon: `${publicBase}/placeholder.svg`,
    introLogo: `${publicBase}/placeholder.svg`,
    headerLogo: `${publicBase}/placeholder.svg`,
    heroDecoration: `${publicBase}/placeholder.svg`,
    beforeAfter: [],
    gallery: [],
  },

  services: {
    manicure: [],
    pedicure: [],
    podology: [],
    training: [],
  },

  reviews: [],
  promotions: [],
  amenities: [],

  seo: {
    siteUrl: "https://example.com/",
    title: "TANEM — шаблон мастера",
    description: "Чистый шаблон сайта мастера TANEM.",
    keywords: [],
    locale: "ru_RU",
  },

  analytics: {
    yandexMetrikaId: "",
  },
};
