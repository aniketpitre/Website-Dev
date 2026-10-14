# Shivneri Enterprises — website

Single-page showcase site for **Shivneri Enterprises** — eco-friendly bags (non-woven D-cut, BOPP laminated, metallic, tote, cotton saree covers, jute).

Static HTML/CSS/JS, no build step. Motion is GSAP + ScrollTrigger with Lenis smooth scrolling (vendored in `assets/vendor/`).

```
index.html      page markup (logo SVG inlined)
styles.css      design system + layout
main.js         intro, scroll animations, colour studio
assets/brand    logo (SVG, extracted from client vector file), favicon, OG image
assets/img      product photography (from client catalogue) as WebP
```

Run locally: `npx serve .` (or any static server).

## Deploying

The Vercel project `shivneri-enterprises` is linked to this repo. Every push to `main` deploys to production automatically; pushes to other branches get preview URLs.

## Updating images

All images live in this repo:

- `assets/img/` — product and lifestyle photos (WebP, max ~1100px)
- `assets/brand/` — logo SVGs, favicon, social share image

To swap a photo, replace the file with the same name (or add a new one and update the `src` in `index.html`), commit and push to `main`.
