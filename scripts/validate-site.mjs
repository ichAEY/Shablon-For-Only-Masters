import site from "../site-data.mjs";
import {
  bookingMode,
  categoryMode,
  contactOptions,
  normalizedLocales,
  specialtyMode,
  visibleServiceGroups,
} from "../template-rules.mjs";

const fail = (message) => {
  throw new Error(`site-data.mjs: ${message}`);
};

const arrays = [
  ["master.aboutParagraphs", site.master.aboutParagraphs],
  ["master.skills", site.master.skills],
  ["images.beforeAfter", site.images.beforeAfter],
  ["images.gallery", site.images.gallery],
  ["services.groups", site.services.groups],
  ["reviews", site.reviews],
  ["promotions", site.promotions],
  ["amenities", site.amenities],
];

for (const [label, value] of arrays) {
  if (!Array.isArray(value)) fail(`${label} must be an array`);
}

const groups = visibleServiceGroups(site);
const groupIds = groups.map((group) => group.id);
if (new Set(groupIds).size !== groupIds.length) fail("service group ids must be unique");
for (const group of groups) {
  if (!group.label) fail(`service group ${group.id} must have a label`);
  if (!Array.isArray(group.services)) fail(`service group ${group.id} services must be an array`);
}

if (!site.location.timeZone) fail("location.timeZone must exist");
if (!site.seo.siteUrl) fail("seo.siteUrl must exist");
if (!["generic", "hair", "nails"].includes(specialtyMode(site))) fail("unsupported specialty");

const locales = normalizedLocales(site).map((item) => item.code);
if (site.location.countryCode) {
  const country = String(site.location.countryCode).toUpperCase();
  if (country === "RU") {
    if (locales.length !== 2 || !locales.includes("ru") || !locales.includes("en")) {
      fail("Russia must publish exactly RU + EN");
    }
  } else {
    const localLocale = String(site.i18n.localLocale || "").toLowerCase();
    if (!localLocale || localLocale === "ru" || localLocale === "en") fail("non-Russia site must declare a local language");
    if (locales.length !== 3 || !locales.includes(localLocale) || !locales.includes("ru") || !locales.includes("en")) {
      fail("non-Russia site must publish local + RU + EN");
    }
  }
}

const messenger = site.contacts?.messenger;
if (messenger) {
  const type = String(messenger.type || "").toLowerCase();
  const url = String(messenger.url || "").toLowerCase();
  if (type === "instagram" || url.includes("instagram.com")) fail("Instagram is not allowed");
}

if (site.master.name && bookingMode(site) === "contact" && contactOptions(site).length === 0) {
  fail("published master without direct booking must have at least a phone/contact option");
}

categoryMode(site);
console.log("TANEM master template rules are valid.");
