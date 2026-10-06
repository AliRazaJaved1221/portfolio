# Portfolio — Galaxy Edition

A full redesign of the starter project: a dark, space-themed one-page portfolio
with a live canvas star field, a cursor-reactive "gravity well," a custom
comet-trail cursor, and scroll-driven reveal animations throughout.

## What changed from the starter

- New visual theme: deep-space palette (void navy, nebula purple) with an
  ion-cyan / comet-violet / nova-gold accent trio, replacing the old
  orange theme.
- New typography: Space Grotesk (display), Inter (body), JetBrains Mono
  (labels/data), loaded via Google Fonts in `public/index.html`.
- New signature element: `src/components/GalaxyBackground.jsx`, a fixed
  canvas star field with parallax, twinkle, shooting stars, and a soft
  cursor-following gravity effect.
- New custom cursor: `src/components/CustomCursor.jsx` — a glowing dot,
  a lagging ring that grows over links/buttons, and a fading particle
  trail. Automatically disabled on touch devices and when the OS
  "reduce motion" setting is on.
- All previously-missing sections/components added: sticky glass navbar
  with scroll-spy, Hero, About, Skills (animated bars), Projects
  (tilt-on-hover cards), Experience (timeline), Contact (working mailto
  form), Footer.
- Fixed `postcss.config.js`, which used `export default` — that syntax
  needs `"type": "module"` in `package.json` to work under Node's default
  CommonJS resolution, and would have crashed `postcss-loader`. It's
  now `module.exports`.

## Before you run it

Every real piece of content — your name, bio, skills, projects, work
history, email, and social links — lives in one place:

```
src/data/portfolioData.js
```

Open that file and replace the placeholder values with your own. Nothing
else needs to change.

## Run it

```bash
npm install
npm start
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
```

Outputs a static build to `/build`, ready to deploy to Vercel, Netlify,
GitHub Pages, or any static host.

## Structure

```
src/
  components/
    GalaxyBackground.jsx   fixed canvas star field (signature element)
    CustomCursor.jsx       custom cursor + trail
    Navbar.jsx             sticky nav with scroll-spy
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Contact.jsx
    Footer.jsx
    SectionHeading.jsx     shared eyebrow + heading
  data/
    portfolioData.js       <- edit this with your real content
  App.js
  index.js
  index.css
```

## Notes

- Motion respects `prefers-reduced-motion`: the canvas stops animating
  and the custom cursor is skipped entirely.
- The custom cursor only activates on devices with a mouse (`hover: hover`
  and `pointer: fine`), so touch devices keep their native cursor/tap
  behavior untouched.
- Colors, fonts, and animation keyframes are defined in
  `tailwind.config.js` if you want to adjust the palette.
