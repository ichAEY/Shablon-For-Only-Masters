# TANEM Master Template — Verified Sources

Verified before integration on 2026-09-19.

## Current mechanics rule

For all new changes and refinements after this point, `ichAEY/Shablon-Hair-Master` is the only approved mechanics reference. Do not copy or invent mechanics from Nina, ClayTone, Esmeralda or other client repositories.

The older sections below are retained only as historical provenance for mechanics that were already integrated and tested before this rule was approved. They are not sources for future changes.

## Base design + service structures + Hair mobile decoration
Repository: `ichAEY/Shablon-Hair-Master`
Verified commit: `d9ce7e2cd6fa16ad900fce2568b584cbc5a84481`
Use only:
- overall visual baseline;
- mobile/desktop service layouts;
- service variants;
- simple services with/without descriptions;
- 3+ category presentation;
- Hair mobile hero decoration;
- known-experience presentation.

## Nails + exactly two categories
Repository: `ichAEY/claytone-current`
Verified latest commit: `89647b7d61ebcdfd43f74de2afa4d81b3dfb0194`
Use only:
- animated mobile nail palette;
- exactly-two-category switcher behavior/layout.

Important: `nonna.tanem.ru` must not be sourced from the similarly named old Nonna repositories. The current production lineage uses `claytone-current`.

## Nina reference
Repository: `ichAEY/nina-ayzenberg`
Verified latest commit: `d3674862792bce14a8cc245a04b9d2cdc8154772`
Its Pages workflow builds from:
- `ichAEY/claytone-current@ce1bd42b44e76e1851af9e069c4cbcf06fc8eac2`
- `ichAEY/tanem-master-template-v1@2c3590bdb8d4163532d126d67f27be1469a426c5`

Use Nina only as a structural reference for the user-approved no-experience layout. Important verification note: the current Nina data itself contains `experienceYears: "2+"`, so Nina is not treated as factual evidence that experience is unknown. When our source data has no experience, TANEM never invents a number: the template hides the experience badge and collapses the hero stats to rating + service count. Never copy Nina client data.

## Language switcher + no-direct-booking contact sheet
Repository: `ichAEY/Beauty-Room-by-Esmeralda`
Verified latest commit: `d7c490e905157ab8cf719d27028ac6f876e28a70`
Use only:
- mobile language switcher style and saved/system-language behavior from `mobile-beautyroom-i18n-v1.js`;
- contact-sheet entrance, page scroll lock and contact-option styling from `mobile-beautyroom-booking-links-v2.js`.
Desktop language-switch placement is implemented in this template; do not copy the Esmeralda desktop page.


## Approved Hair asset handling
The Hair hero decoration is the exact binary file from:
`Shablon-Hair-Master@d9ce7e2cd6fa16ad900fce2568b584cbc5a84481/public/assets/yulia/tools/hero.png`.

The template workflow checks out that pinned source commit during the build and copies only that binary to:
`public/assets/template/hair-tools.png`.

This prevents approximate redrawing and prevents client-specific Hair source folders from being copied into the clean template.
