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

Run locally: `npx serve .` (or any static server). Deploys to Vercel as a static site.
