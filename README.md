# Manitha Pasandul — Portfolio

A modern, responsive personal portfolio for **Manitha Pasandul**, a Mechanical
Engineering graduate from the University of Moratuwa. Built as a static site
(HTML/CSS/vanilla JS) so it deploys directly to GitHub Pages with no build step.

> **This site is filled with placeholder/dummy content.** No real personal
> information is used except the name and degree. See "Replacing placeholder
> content" below before publishing.

## Structure

```
index.html          Page markup (all sections + icon sprite + project modal)
css/style.css        Design system: theme variables, layout, components, animations
js/data.js           All dummy content in one place (profile, education, experience,
                      skills, projects, awards, interests) + a placeholder-image generator
js/main.js           Rendering + interactivity: theme toggle, nav, scroll reveal,
                      project filter/modal, contact form, back-to-top
assets/images/        Placeholder profile photo + favicon (inline SVG, no external requests)
assets/cv/            Sample/dummy CV PDF
```

Content is data-driven: sections like Skills, Projects, Experience, Education,
Awards, and Interests are rendered from `js/data.js` at runtime, so updating
content never requires touching the HTML or JS logic.

## Running locally

No build tools required — any static file server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository (root of the repo, or a `docs/` folder).
2. In the repo settings → **Pages**, set the source to the branch/folder you pushed to.
3. GitHub Pages will serve `index.html` directly — no build step needed.

## Replacing placeholder content

Every spot that needs real data is marked with a `REPLACE-ME` comment. The main ones:

| What | Where |
|---|---|
| Profile photo | `assets/images/profile-placeholder.svg` — replace the file (e.g. `profile.jpg`) and update `profile.profileImage` in `js/data.js` |
| CV / resume | `assets/cv/Manitha_Pasandul_Sample_CV.pdf` — replace the file and update `profile.cvUrl` in `js/data.js` |
| Email / phone / location | `profile` object in `js/data.js` |
| Social links (LinkedIn, GitHub, Twitter/X, Instagram) | `profile.socials` in `js/data.js` |
| Education, experience, skills, awards, interests | Corresponding arrays in `js/data.js` |
| Projects (summary, objectives, challenges, methodology, outcomes, images) | `projectCategories` array in `js/data.js` — project images use a generated SVG placeholder (`placeholderImage()`); swap `image`/`gallery` fields for real photos |
| Contact form | `#contact-form` in `index.html` is intentionally non-functional (demo only) — wire it up to a real form backend (e.g. Formspree, Netlify Forms, or a custom API) when ready |

## Features

- Sticky glassmorphism navigation with active-section indicator and mobile hamburger menu
- Light/Dark mode toggle with persisted preference (`localStorage`) and system-preference fallback
- Scroll-reveal animations, animated hero background, hover effects on all cards/buttons
- Project filter by category + detail modal (objectives, challenges, methodology, technologies, outcomes, gallery)
- Fully responsive (desktop / tablet / mobile), accessible markup, no external JS dependencies
