const invalidLinks = new Set(["", "#", "about:blank"]);

export function hasUsableLink(value) {
  if (typeof value !== "string") return false;
  const normalized = value.trim();
  return Boolean(normalized) && !invalidLinks.has(normalized);
}

export function visibleServiceGroups(site) {
  const groups = Array.isArray(site?.services?.groups) ? site.services.groups : [];
  return groups
    .filter((group) => group && typeof group.id === "string" && group.id.trim())
    .map((group) => ({
      ...group,
      id: group.id.trim(),
      label: String(group.label || "").trim(),
      services: Array.isArray(group.services) ? group.services : [],
    }))
    .filter((group) => group.services.length > 0);
}

export function categoryMode(site) {
  const count = visibleServiceGroups(site).length;
  if (count <= 1) return "single";
  if (count === 2) return "two";
  return "many";
}

export function bookingMode(site) {
  return hasUsableLink(site?.links?.bookingUrl) ? "direct" : "contact";
}

export function serviceBookingUrl(service, site) {
  if (hasUsableLink(service?.url)) return service.url.trim();
  if (bookingMode(site) === "direct") return site.links.bookingUrl.trim();
  return "";
}

export function experienceMode(site) {
  const value = site?.master?.experienceYears;
  return value === null || value === undefined || String(value).trim() === "" ? "unknown" : "known";
}

export function specialtyMode(site) {
  const specialty = String(site?.template?.specialty || "").toLowerCase();
  if (specialty === "hair" || specialty === "nails") return specialty;
  return "generic";
}

export function hasLogo(site) {
  return hasUsableLink(site?.images?.logo);
}

export function normalizedLocales(site) {
  const source = Array.isArray(site?.i18n?.locales) ? site.i18n.locales : [];
  const seen = new Set();
  const result = [];
  for (const item of source) {
    const code = String(item?.code || "").trim().toLowerCase();
    if (!code || seen.has(code)) continue;
    seen.add(code);
    result.push({ code, label: String(item?.label || code.toUpperCase()).trim() || code.toUpperCase() });
  }
  return result;
}

export function chooseInitialLocale(site, browserLanguages = [], savedLocale = "") {
  const locales = normalizedLocales(site);
  const supported = new Set(locales.map((item) => item.code));
  const saved = String(savedLocale || "").toLowerCase();
  if (supported.has(saved)) return saved;

  for (const raw of browserLanguages) {
    const language = String(raw || "").toLowerCase();
    const exact = locales.find((item) => language === item.code || language.startsWith(item.code + "-"));
    if (exact) return exact.code;
  }

  if (supported.has("en")) return "en";
  return locales[0]?.code || "ru";
}

export function contactOptions(site) {
  const result = [];
  if (hasUsableLink(site?.contacts?.phoneHref)) {
    result.push({ kind: "phone", label: String(site?.contacts?.phoneDisplay || "Phone"), url: site.contacts.phoneHref });
  }
  const messenger = site?.contacts?.messenger;
  if (messenger && hasUsableLink(messenger.url)) {
    const kind = String(messenger.type || "messenger").toLowerCase();
    if (kind !== "instagram" && !String(messenger.url).toLowerCase().includes("instagram.com")) {
      result.push({ kind, label: String(messenger.label || "Messenger"), url: messenger.url });
    }
  }
  return result;
}
