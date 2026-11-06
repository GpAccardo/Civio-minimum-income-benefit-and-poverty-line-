# Voxeurop multilingual adaptation — working source

This is an adapted copy of Civio’s Svelte/D3 project, with French and Italian translations added alongside English and Spanish. **It has not been production-tested.**

## Launch

Requires Node.js 24. From this directory run:

```sh
npm install
npm run dev
```

Select a language at `?lang=en`, `?lang=fr`, `?lang=it` or `?lang=es`. The default language for standalone mode is English. For deployment run `npm run build`.

## Important before going live

- Get permission or confirm the repository licence for adaptation and redistribution; the repository being public alone does not grant rights.
- Proofread French/Italian translations, especially narrative screen-reader summaries.
- The live CSV is still fetched from `https://data.civio.es/lopublico/imv-eu/imv-pobreza-eu/data.csv`; test browser CORS and persistence.
- The share/embed UI still points to Civio's `graphs.civio.es` domain. Change it to your final hosted Voxeurop location in `src/lib/footer/ShareContainer.svelte` and generate multilingual iframe snippets accordingly.
- The methodology link still points to the original Civio investigation, and the Civio logo remains for proper credit.
- `index.html` includes Civio’s global stylesheet URL; consider replacing with self-hosted CSS after verifying the layout.
- Test keyboard navigation, responsive layout, and accessibility in all editions.

## Core files

- `src/App.svelte` — chart container, data URL, interactions.
- `src/lib/DotChart.svelte` — chart drawing.
- `src/states/language.svelte.js` — ES/EN/FR/IT strings.
- `src/utils/locale.js` — number and euro formats.
- `src/states/data.svelte.js` — CSV loading and transformation.
- `src/lib/footer/ShareContainer.svelte` — embed code URL.

Credits: Original visualisation by Civio. Multilingual adaptation prepared for Voxeurop.
