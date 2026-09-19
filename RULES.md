# TANEM Master Template — Rules v2

This repository is the single production template for individual masters. It is not a salon template and it never contains a real client site.

## Production boundary
- `Shablon-For-Only-Masters` stores only reusable layout, mechanics, validation and specialty rules.
- Real masters are created only in separate client repositories such as `TAN-xxxx`.
- Never insert a client's name, contacts, photos, services, reviews or business links into this template.
- A client repository is generated from the current stable template and then receives verified client data.

## Immutable visual policy
- Base colors, typography, spacing, cards, responsive behavior and overall visual language come from the approved Hair master design.
- Approved mechanics are taken only from `Shablon-Hair-Master`. Do not invent replacement mechanics when an approved Hair Master implementation already exists.
- Client data, photos, branding and unrelated blocks from reference sites must never be copied.
- Instagram links are never published.

## Specialty
- `hair`: mobile shows the approved Hair scissors/comb decoration; desktop does not.
- `nails`: mobile shows the approved animated nail palette; desktop does not.
- The Nails palette is positioned inside the hero with a stable reserved gap above the booking-action row, so client text length cannot push it into the CTA.
- Unknown specialties render safely without a specialty decoration until a new approved preset is added.

## Hero copy
Hair is deterministic:
- heading: `<Имя> — ваш эксперт по волосам`;
- copy: `Стрижки, окрашивание, блонд, уход и укладки с вниманием к состоянию волос, оттенку и вашему образу.`

Nails is deterministic in the heading:
- heading: `<Имя> — ваш эксперт по маникюру и педикюру`;
- supporting copy may come from verified client data until a separate fixed Nails copy is approved.

Generic/unsupported specialties use verified client copy.

## Intro
- Logo has priority when a real logo is supplied.
- Without a logo, intro/header use the text brand/master name fallback.
- Intro text is always centered.
- Long names automatically reduce in size and may wrap to two balanced lines instead of leaving the viewport.
- Never invent a logo.

## Portfolio
- Portfolio is a permanent structural section on both mobile and desktop.
- Missing client photos must not remove the Portfolio section or the hero link to it.
- The approved CTA wording is `Смотреть все работы`.
- The gallery control is always active. With zero client photos it opens the approved Hair Master gallery shell with no photographs inside.
- When the operator later uploads real client photos, the mobile and desktop gallery behavior remains the approved `Shablon-Hair-Master` behavior.
- Never invent, generate or download substitute client photos.

## Services
Every service uses one of the three approved Hair structures:
1. variants/subdivisions;
2. simple service with no description;
3. simple service with a description.

Categories:
- 1 visible category: no category switcher.
- exactly 2: two-button mode using the approved Hair Master tab mechanics; no synthetic `Все` tab.
- 3 or more: one Hair-style horizontal ribbon including `Все`; it never wraps to a second row. Overflow continues horizontally and is scrollable.
- Categories are dynamic and are never limited to four or five groups.

Many services:
- up to 7 services are shown immediately;
- from the 8th service onward, show the first 7 and the automatic `Открыть ещё N услуг` control;
- mobile and desktop use the same visible count and the same hidden count;
- the count is derived from the actual hidden items, never written by hand.

## About the master
The standard copy is written in first person and is deterministic. Only the master's first name is inserted into this standard lead.

Hair:
- unknown experience lead: `Я <Имя> — эксперт по волосам.`
- known experience lead: `Я <Имя> — эксперт по волосам со стажем более <N> лет.`
- paragraph 1: `Специализируюсь на стрижках и окрашивании, blond и сложных техниках, уходе и реконструкции волос.`
- paragraph 2: `Работаю с формой, цветом и состоянием волос, чтобы результат выглядел цельно и подходил именно вам.`
- skills: `Стрижки и окрашивание`; `Blond и сложные техники`; `Уход и реконструкция волос`.

Nails:
- unknown experience lead: `Я <Имя> — эксперт по маникюру и педикюру.`
- known experience lead: `Я <Имя> — эксперт по маникюру и педикюру со стажем более <N> лет.`
- paragraph 1: `Выполняю маникюр и педикюр, наращивание и коррекцию ногтей.`
- paragraph 2: `Работаю со стерильными инструментами и уделяю внимание аккуратности, форме и качеству результата.`
- skills: `Маникюр и педикюр`; `Наращивание и коррекция`; `Стерильные инструменты`.

The round monogram in About is mobile-only and always uses the first letter of the master's first name. Schedule, address and unrelated facts never enter the three skills.

## Experience
- Known experience: show the approved experience stat/badge and include it in the standard first-person About lead.
- Unknown experience: never invent it; omit the experience phrase, collapse hero stats to rating + service count and hide the empty experience badge.

## Languages
Russia:
- RU + EN.

Outside Russia:
- local country language + RU + EN.

Initial locale:
- saved visitor choice wins;
- otherwise use the first supported browser/system language;
- unsupported system language falls back to EN.

The selected locale is saved locally.

Content normalization:
- Russian is the canonical internal content language.
- Other enabled languages receive faithful translations.
- Reviews may remain in their original language; service names, descriptions, categories, master copy, location copy and interface must be translated.
- A populated site fails validation if a required enabled-language translation is missing.

Layout:
- mobile language switch keeps the approved Esmeralda behavior immediately left of the menu;
- desktop language switch is visibly larger and sits immediately before the phone;
- the phone remains the rightmost desktop contact element.

## Reviews
- Publish at most 9 verified reviews from Yandex Maps.
- Review structure on mobile and desktop follows `Shablon-Hair-Master`.
- Review text must be copied verbatim from Yandex Maps. Never summarize, rewrite, shorten, correct or fabricate review wording.
- If fewer than 9 verified reviews are available, publish only the verified reviews that exist.

## Booking and contact
- The booking block always uses: `Запишитесь онлайн или свяжитесь любым удобным способом.`
- Mobile booking/contact structure is frozen to the approved `TAN-0074` mobile `Запись и связь` block.
- Desktop booking/contact remains unchanged unless separately approved.
- The primary mobile booking CTA spans the full available action width.
- The live `Открыто / Закрыто` badge is shown at the right of `Запись и связь` and recalculates from the client's configured timezone and schedule data.
- A verified address and work schedule are displayed below the mobile contact actions as plain text, never as a white card or separate route button.
- The mobile location action is the only map link in this block and uses the verified route/map URL; the provider must come from client/source data rather than being invented.
- When the location action is the unpaired final action on mobile, it spans the full contact-grid width.
- If a direct booking URL exists, generic booking CTAs open it.
- If a service-specific URL exists, that service opens its own URL.
- Otherwise the service inherits the direct booking URL when one exists.
- Without a direct booking URL, booking CTAs use the approved contact sheet.
- Phone alone is a valid contact configuration; messenger is optional.
- Never invent a booking URL, phone or messenger.
- Never expose Instagram as a booking/contact option.

## Images
- The operator uploads client photos into the target client repository.
- Missing photos never delete major structural sections.
- The template never guesses missing client photos and never generates a client logo.

## Mass-production quality gate
Before a template version becomes stable, rendered QA must cover at least:
- Hair with 3+ categories;
- Nails with exactly 2 categories and the mobile palette;
- empty gallery while Portfolio remains present;
- long master name;
- many services with automatic hidden count;
- RU/EN desktop header;
- direct booking;
- phone-only contact.

Only a green tested template version may be used to generate new `TAN-xxxx` repositories.
