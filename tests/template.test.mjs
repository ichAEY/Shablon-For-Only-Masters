import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import site from "../site-data.mjs";
import {
  aboutPreset,
  categoryMode,
  collapsedServiceCounts,
  heroPreset,
  masterInitial,
  SERVICE_PREVIEW_LIMIT,
} from "../template-rules.mjs";

const html = fs.readFileSync("out/index.html", "utf8");
const css = fs.readFileSync("app/template.css", "utf8");
const component = fs.readFileSync("app/master-template.tsx", "utf8");

test("static export builds from the empty template", () => {
  assert.match(html, /site-root/);
});

test("client data is empty in the base template", () => {
  assert.equal(site.master.name, "");
  assert.equal(site.location.city, "");
  assert.equal(site.contacts.phoneDisplay, "");
  assert.equal(site.reviews.length, 0);
  assert.equal(site.images.gallery.length, 0);
  assert.equal(Object.values(site.services).flat().length, 0);
});

test("the clean template uses one canonical stylesheet and runtime", () => {
  assert.ok(fs.existsSync("app/template.css"));
  assert.ok(fs.existsSync("public/template-runtime.js"));
});

test("portfolio and full gallery remain structural without client photos", () => {
  assert.match(html, /id="mobile-portfolio"/);
  assert.match(html, /Смотреть все работы/);
  assert.match(html, /mct-work-placeholder/);
  assert.doesNotMatch(html, /disabled=""[^>]*Смотреть все работы/);
});

test("specialty hero copy is deterministic", () => {
  const hair = {
    template: { specialty: "hair" },
    master: { heroEmphasis: "ignored", heroCopy: "ignored" },
  };
  const nails = {
    template: { specialty: "nails" },
    master: { heroEmphasis: "ignored", heroCopy: "Проверенный текст мастера" },
  };
  assert.deepEqual(heroPreset(hair), {
    emphasis: "эксперт по волосам",
    copy: "Стрижки, окрашивание, блонд, уход и укладки с вниманием к состоянию волос, оттенку и вашему образу.",
  });
  assert.deepEqual(heroPreset(nails), {
    emphasis: "эксперт по маникюру и педикюру",
    copy: "Проверенный текст мастера",
  });
});

test("category mechanics stay 1 / 2 / 3+ without a hard cap", () => {
  const makeSite = (count) => ({
    services: {
      groups: Array.from({ length: count }, (_, index) => ({
        id: `g-${index}`,
        label: `G ${index}`,
        services: [{ name: `S ${index}` }],
      })),
    },
  });
  assert.equal(categoryMode(makeSite(1)), "single");
  assert.equal(categoryMode(makeSite(2)), "two");
  assert.equal(categoryMode(makeSite(3)), "many");
  assert.equal(categoryMode(makeSite(8)), "many");
});

test("hidden service counts are computed from the responsive layouts", () => {
  const testSite = {
    services: {
      groups: [
        { id: "a", label: "A", services: Array.from({ length: 4 }, (_, i) => ({ name: `A${i}` })) },
        { id: "b", label: "B", services: Array.from({ length: 3 }, (_, i) => ({ name: `B${i}` })) },
        { id: "c", label: "C", services: Array.from({ length: 2 }, (_, i) => ({ name: `C${i}` })) },
      ],
    },
  };
  assert.equal(SERVICE_PREVIEW_LIMIT, 7);
  assert.deepEqual(collapsedServiceCounts(testSite), {
    total: 9,
    mobileHidden: 2,
    desktopHidden: 2,
  });
});


test("approved About copy and skills are deterministic", () => {
  const hair = {
    template: { specialty: "hair" },
    master: { name: "Ксения Шаповалова", experienceYears: null },
    brand: { name: "" },
  };
  assert.deepEqual(aboutPreset(hair), {
    lead: "Я Ксения — эксперт по волосам.",
    paragraphs: [
      "Специализируюсь на стрижках и окрашивании, blond и сложных техниках, уходе и реконструкции волос.",
      "Работаю с формой, цветом и состоянием волос, чтобы результат выглядел цельно и подходил именно вам.",
    ],
    skills: [
      "Стрижки и окрашивание",
      "Blond и сложные техники",
      "Уход и реконструкция волос",
    ],
  });
  assert.equal(masterInitial(hair), "К");

  const nails = {
    template: { specialty: "nails" },
    master: { name: "Наталья", experienceYears: "14" },
    brand: { name: "" },
  };
  assert.equal(aboutPreset(nails).lead, "Я Наталья — эксперт по маникюру и педикюру со стажем более 14 лет.");
  assert.equal(aboutPreset({ ...nails, master: { ...nails.master, experienceYears: "14+" } }).lead, "Я Наталья — эксперт по маникюру и педикюру со стажем более 14 лет.");
  assert.deepEqual(aboutPreset(nails).skills, [
    "Маникюр и педикюр",
    "Наращивание и коррекция",
    "Стерильные инструменты",
  ]);
  assert.equal(masterInitial(nails), "Н");
});

test("reviews are capped at nine and rendered without rewriting their text", () => {
  assert.match(component, /site\.reviews as Review\[\]\)\.slice\(0, 9\)/);
  assert.match(component, /<blockquote>«\{review\.text\}»<\/blockquote>/);
});

test("approved gallery and service limits cannot regress", () => {
  assert.match(component, /\{galleryOpen && \(/);
  assert.doesNotMatch(component, /galleryOpen && galleryWorks\.length > 0/);
  assert.doesNotMatch(component, /group\.services\.slice\(0,\s*2\)/);
  assert.match(css, /nth-child\(n \+ 8\)/);
  assert.match(component, /locationFillsContactRow/);
});

test("final CSS locks Nails to mobile and many categories to one horizontal ribbon", () => {
  assert.match(css, /TANEM master engine rules v2: mass-production invariants/);
  assert.match(css, /@media \(max-width: 767px\)[\s\S]*?\.mct-hero-visual \.mct-palette-stage[\s\S]*?display: block !important/);
  assert.match(css, /@media \(min-width: 768px\)[\s\S]*?\.mct-palette-stage[\s\S]*?display: none !important/);
  assert.match(css, /\.mct-tabs-ribbon-wrap\.is-many \.mct-tabs-track[\s\S]*?display: flex !important[\s\S]*?flex-wrap: nowrap !important/);
  assert.match(css, /\.dct-top-actions \.mct-lang-switch\.is-desktop button[\s\S]*?font-size: 20px !important/);
});
