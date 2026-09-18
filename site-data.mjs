const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
  basePath: publicBase,

  template: {
    specialty: "",
    bookingProvider: "",
    reviewSource: "",
  },

  brand: {
    name: "",
    subtitle: "",
    monogram: "",
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
    visitMotto: "",
    experienceYears: null,
    experienceAria: "",
    aboutTitle: "",
    aboutLead: "",
    aboutParagraphs: [],
    skills: [],
  },

  location: {
    country: "",
    countryCode: "",
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
    phoneHref: "",
    messenger: null,
  },

  links: {
    bookingUrl: "",
    reviewsUrl: "",
    mapUrl: "",
    routeUrl: "",
    mobileMapEmbedUrl: "about:blank",
    desktopMapEmbedUrl: "about:blank",
    yandexMapHrefMatch: "__tanem_map_not_configured__",
  },

  reputation: {
    rating: "",
    reviewCount: "",
  },

  images: {
    logo: "",
    portrait: `${publicBase}/placeholder.svg`,
    about: `${publicBase}/placeholder.svg`,
    favicon: `${publicBase}/placeholder.svg`,
    heroDecoration: `${publicBase}/assets/template/hair-tools.png`,
    beforeAfter: [],
    gallery: [],
  },

  services: {
    groups: [],
  },

  i18n: {
    localLocale: "ru",
    locales: [
      { code: "ru", label: "RU" },
      { code: "en", label: "EN" },
    ],
    translations: {
      en: {},
    },
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
