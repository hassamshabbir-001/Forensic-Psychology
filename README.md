# Forensic Psychology

Custom Astro + TypeScript website for **forensicpsychology.pro**.

## Stack

- Astro 5
- TypeScript (strict mode)
- Static output for fast hosting
- Custom CSS and minimal JavaScript
- No theme builder or heavy UI framework

## Development

```bash
npm install
npm run dev
```

Open the local URL shown by Astro.

## Production build

```bash
npm run build
```

The deployable static website is generated in the `dist/` folder.

## Hostinger deployment

### Git deployment

Use the repository's `main` branch and configure:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 20 or newer

### Manual deployment

1. Run `npm install` and `npm run build`.
2. Upload the contents of `dist/` to the domain's `public_html` directory.
3. Connect `forensicpsychology.pro` and enable SSL.

## Current homepage

The homepage includes the centered official logo, existing menu structure, responsive navigation, clean hero, topic and career pathways, expert-led copy, article cards, FAQs, newsletter area, footer, canonical metadata, social metadata and JSON-LD.

## Content status

Navigation links are intentionally prepared for the future category and article pages. Those pages will be developed after the homepage design and content direction are approved.
