# Sodeeq Olalekan — Premium Digital Trust Portfolio

A responsive, static portfolio site in a premium navy-and-mint style. Based on the owner's existing `Olalekan-port` repository, with redesigned pages and local assets.

## Pages
- `index.html` — home and featured work
- `about.html` — biography and career story
- `projects.html` — SpringTrust, GrantMo and public GRC work
- `core-competencies.html` — expertise and practical skills
- `research.html` — research, ISACA expert review and speaking
- `contact.html` — email, LinkedIn and GitHub

## Local preview
Run `python -m http.server 8080` from this folder, then visit `http://localhost:8080`. No Node.js/build/install step is required.

## Important evidence and publishing checks
- The first journal paper is first-authored; the financial reporting paper lists Sodeeq second, as confirmed by their journal author lists.
- SpringTrust is in development and is described as the successor name to TrustReady; this portfolio does **not** claim that its trademark is registered or that it has production clients.
- GrantMo is described as MVP/pre-pilot, without invented revenue or usage metrics.
- The public GitHub profile is linked; a precise GRC repository URL should be added after it is confirmed.
- Professional accreditation badges and older numerical impact claims have not been added without documentation.
- The outdated `assets/olalekan_resume.pdf` is intentionally **excluded from the new published site**, so it is not accidentally made available at a direct URL. Retain an original backup in your old repository or the earlier portfolio ZIP and prepare a replacement résumé before adding a download button.
- Contact email and LinkedIn are carried over from the owner's existing portfolio files. Confirm continued preference before publishing.
- The site contains no form processor and no embedded analytics. Google-hosted fonts are loaded when available; system fonts work offline.

## How to preview using a GitHub pull request and Netlify
1. Keep the existing `main` branch untouched.
2. In a local clone of `https://github.com/SIOlalekan/Olalekan-port`, create `portfolio-redesign-preview` using `git switch -c portfolio-redesign-preview`.
3. Copy **the contents** of this folder into the repo's root; retain the `.git` directory. Review `git status` and changed files.
4. Run `git add -A && git commit -m "Redesign all portfolio pages in navy and mint" && git push -u origin portfolio-redesign-preview`.
5. Open a pull request from `portfolio-redesign-preview` to `main`, **do not merge it yet**.
6. If Netlify Deploy Previews are enabled for the site and GitHub is connected, Netlify should add a deploy preview link to the PR checks. Review the preview on mobile and desktop.
7. After checking content, links, spelling, accessibility and the Netlify preview, merge the PR to update production.

If no preview appears, check Netlify **Project configuration → Build & deploy → Continuous deployment → Deploy contexts** and verify that Deploy Previews are enabled. Names may vary slightly by Netlify UI version.

## Tech
Plain HTML5, CSS3, small vanilla JavaScript. All pages use shared `styles/redesign.css` and `js/redesign.js`. `netlify.toml` sets the publish directory to the repository root; confirm this matches the current Netlify site's settings. No back-end or credentials included.
