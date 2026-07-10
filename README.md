# Personal Portfolio

A clean, responsive personal portfolio website built with plain **HTML, CSS and JavaScript** — no build tools required.

## Features

- Responsive layout (mobile → desktop)
- Dark / light theme toggle (remembers your choice)
- Sections: Hero, About, Skills, Projects, Contact
- Projects rendered from a simple, editable data file
- Reveal-on-scroll animations
- Zero dependencies / no build step

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customise

- **Text & sections:** edit `index.html`
- **Colors & styles:** edit `assets/css/style.css` (CSS variables at the top)
- **Projects:** edit the `projects` array in `assets/js/projects.js`
- **Behaviour:** edit `assets/js/main.js`

## Deploy (GitHub Pages)

1. Push this repo to GitHub.
2. In **Settings → Pages**, set the source to the `main` branch, root folder.
3. Your site will be published at `https://<username>.github.io/<repo>/`.

## Structure

```
.
├── index.html
├── README.md
└── assets
    ├── css/style.css
    └── js
        ├── projects.js
        └── main.js
```
