# TANEM Master Template — Rules v1

This repository is the single production template for individual masters. It is not a salon template.

## Immutable visual policy
- Base colors, typography, spacing, cards, responsive behavior and overall visual language come from `Shablon-Hair-Master`.
- Source sites contribute only the specific mechanics named in `SOURCES.md`; their client data, photos, branding and unrelated blocks must never be copied.
- Instagram links are never published.

## Specialty
- `hair`: on mobile only, show the hair decoration image from the Hair reference. It must blend into the background and stay centered without colliding with copy or controls.
- `nails`: on mobile only, show the animated nail palette from the Nonna reference.
- Desktop never shows either mobile specialty decoration.
- Unknown specialties render safely without a specialty decoration until a new approved preset is added.

## Logo
- A new client normally starts without a logo.
- Without a logo, intro/header use the text brand fallback.
- If the operator later adds a logo and sets `images.logo`, intro/header use it automatically.
- Never invent a logo.

## Services
Every service uses one of the three existing Hair structures:
1. variants/subdivisions — e.g. one service with short/medium/long hair rows;
2. simple service with no description;
3. simple service with a description.
Mobile and desktop keep their own existing Hair layouts.

Categories:
- 1 visible category: no category switcher.
- exactly 2: two-button Nonna-style switcher; no synthetic “All” tab.
- 3 or more: Hair-style category ribbon. “All” is available on mobile; desktop keeps the Hair presentation.
- Categories are dynamic; the engine must not be limited to four groups.

## Experience
- If years of experience are known, show the experience stat/badge as in Hair.
- If experience is unknown, do not invent it and do not leave an empty slot. Hero stats collapse to rating + service count and the about-card experience badge is hidden.

## Languages
Russia:
- RU + EN.

Outside Russia:
- local country language + RU + EN.

Initial locale:
- saved visitor choice wins;
- otherwise use the first supported browser/system language;
- if the system language is unsupported, fall back to EN.

The selected locale is saved locally on the visitor device.

Mobile switcher uses the style/behavior of Esmeralda and sits immediately to the left of the menu button. Desktop uses the same visual language in a desktop-safe location.

## Booking
- If a direct booking URL exists, every generic booking CTA opens it.
- If a service-specific URL exists, that service opens its own URL.
- If a service has no specific URL but a direct booking URL exists, it opens the generic booking URL.
- If there is no direct booking URL, booking CTAs open the contact sheet based on Esmeralda.
- The contact sheet may contain phone only. A messenger is optional.
- If a messenger exists, show phone + that messenger.
- Phone alone is sufficient to publish.
- Never invent a booking URL or messenger.
- Never expose Instagram as a booking/contact option.

## Images
The operator uploads client photos into the target repository. The template never guesses missing photos and never generates a client logo.
