import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import site from "../site-data.mjs";

const html = fs.readFileSync("out/index.html", "utf8");

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
