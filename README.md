# CoDA 2026 — Workshop Website

Source for the **Closed-Loop Co-Design for Efficient Agentic AI** (CoDA) workshop website,
a NeurIPS 2026 workshop. The site is a static, dependency-free page designed for
**GitHub Pages**.

🔗 **Live site:** https://agentic-codesign.github.io/

## Structure

```
.
├── index.html            # Single-page site (all sections)
├── assets/
│   ├── css/style.css      # Styling (dark, responsive, no build step)
│   └── js/main.js         # Nav, scroll reveal, program committee list
├── .nojekyll              # Serve files as-is (skip Jekyll processing)
└── README.md
```

The LaTeX proposal (`main.tex`, `refs.bib`, `*.sty`, `*.bst`) lives alongside the site as
the source of truth for content; it is not published by GitHub Pages.

## Local preview

No build step is required. Open `index.html` directly, or run a static server:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

This is intended to be served from the **`agentic-codesign.github.io`** repository
(a user/organization Pages repo that serves from the repository root).

1. Create a repository named `agentic-codesign.github.io` under the
   `agentic-codesign` GitHub account/organization.
2. Push the contents of this folder to the default branch:

   ```bash
   git init
   git add .
   git commit -m "Add CoDA 2026 workshop website"
   git branch -M main
   git remote add origin https://github.com/agentic-codesign/agentic-codesign.github.io.git
   git push -u origin main
   ```

3. In **Settings → Pages**, set the source to **Deploy from a branch**, branch `main`,
   folder `/ (root)`. The site goes live at `https://agentic-codesign.github.io/`.

> To serve from a **project** repo instead (e.g. `org/coda-2026`), the site will be
> available at `https://<org>.github.io/coda-2026/`. Because all asset paths are relative,
> no changes are needed.

## Updating content

- **Speakers / dates / schedule / organizers** — edit the corresponding `<section>` in
  `index.html`.
- **Program Committee** — edit the `members` array near the bottom of `assets/js/main.js`.
- **Colors / typography** — adjust the CSS custom properties in the `:root` block of
  `assets/css/style.css`.
