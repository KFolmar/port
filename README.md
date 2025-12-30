# Mechanical & Robotics Engineering Portfolio

Static, client-only portfolio built with HTML/CSS/JS for GitHub Pages. Focused on robotics, embedded control, and fabrication projects.

## Quick Start (Local)
1. Clone or download the repository.
2. Open `index.html` directly in a browser **or** run VS Code Live Server in the workspace root.
3. Toggle light/dark mode via the moon/sun button in the navbar.

## GitHub Pages Deployment
1. Push this repo to GitHub (e.g., `main` branch).
2. In GitHub repo settings, open **Pages**.
3. Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)`.
4. Save; GitHub Pages will publish at `https://<username>.github.io/<repo>/`.

## Why Client-Only
- No backend or build tools: plain HTML, CSS, and JS.
- All assets load via relative paths; works from `index.html` when opened directly.
- Compatible with GitHub Pages and static hosting.

## File Structure
```
/root
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  └─ main.js
├─ assets/
│  ├─ images/
│  ├─ diagrams/
│  └─ resume.pdf
└─ README.md
```

## Customization
- Replace `assets/resume.pdf` with your actual resume.
- Swap email, GitHub, and LinkedIn links in the Contact section of `index.html`.
- Add images/diagrams to `assets/images/` and `assets/diagrams/` as desired.

## Browser Support
Designed for modern browsers with `IntersectionObserver` and CSS variables. Fallback is not provided for legacy browsers.
