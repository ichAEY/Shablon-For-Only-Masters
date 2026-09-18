import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import site from "../site-data.mjs";

const html = fs.readFileSync("out/index.html", "utf8");

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });

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

test("legacy client identities and class namespaces are absent from source", () => {
  const files = walk("app").filter((file) => /\.(tsx|ts|css)$/.test(file));
  const source = files.map((file) => fs.readFileSync(file, "utf8")).join("\n").toLowerCase();

  for (const forbidden of [
    "юлия ролева",
    "julia.tanem.ru",
    "yulia-",
    "stluxe",
    "тахмина",
    "nonna",
  ]) {
    assert.ok(!source.includes(forbidden), `legacy marker found: ${forbidden}`);
  }
});
