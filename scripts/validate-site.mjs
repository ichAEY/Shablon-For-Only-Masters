import site from "../site-data.mjs";

const fail = (message) => {
  throw new Error(`site-data.mjs: ${message}`);
};

const arrays = [
  ["master.aboutParagraphs", site.master.aboutParagraphs],
  ["master.skills", site.master.skills],
  ["images.beforeAfter", site.images.beforeAfter],
  ["images.gallery", site.images.gallery],
  ["services.manicure", site.services.manicure],
  ["services.pedicure", site.services.pedicure],
  ["services.podology", site.services.podology],
  ["services.training", site.services.training],
  ["reviews", site.reviews],
  ["promotions", site.promotions],
  ["amenities", site.amenities],
];

for (const [label, value] of arrays) {
  if (!Array.isArray(value)) fail(`${label} must be an array`);
}

if (!site.location.timeZone) fail("location.timeZone must exist");
if (!site.seo.siteUrl) fail("seo.siteUrl must exist");

console.log("Clean TANEM master template structure is valid.");
