# CoDA 2026 — Workshop Website

Source for the **Closed-Loop Co-Design for Efficient Agentic AI** (CoDA) workshop website,
a NeurIPS 2026 workshop. The site is a static, dependency-free page served by
**GitHub Pages**.

🔗 **Live site:** https://coda-neurips2026.github.io/

## Structure

```
.
├── index.html            # Single-page site (all sections)
├── assets/
│   ├── css/style.css      # Styling (dark, responsive, no build step)
│   └── js/main.js         # Nav, scroll reveal, program committee list
├── .nojekyll              # Serve files as-is (skip Jekyll processing)
├── .gitignore             # Ignores LaTeX build artifacts & editor files
└── README.md
```

## Local preview

No build step is required. Open `index.html` directly, or run a static server:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

The site is served from the **`coda-neurips2026.github.io`** repository — a user/org
Pages repo whose name matches its owner, so GitHub serves it at the clean root URL
`https://coda-neurips2026.github.io/`.

Publishing is automatic: every push to the `main` branch redeploys the live site within
about a minute.

```bash
git add .
git commit -m "Update workshop website"
git push
```

GitHub Pages settings (one-time): **Settings → Pages → Build and deployment**, source
**Deploy from a branch**, branch `main`, folder `/ (root)`.

## Updating content

- **Speakers / dates / schedule / organizers** — edit the corresponding `<section>` in
  `index.html`. Speaker avatars use the person's initials in the `.avatar` div.
- **Program Committee** — edit the `members` array near the bottom of `assets/js/main.js`.
- **Colors / typography** — adjust the CSS custom properties in the `:root` block of
  `assets/css/style.css`.
