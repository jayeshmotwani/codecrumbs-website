# codecrumbs-website

The public homepage for [codecrumbs.in](https://codecrumbs.in) — a landing page showcasing micro-SaaS apps built by one developer.

Built with **React + Vite + Tailwind CSS v4**. Fully static, no backend, no tracking.

## Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [React 19](https://react.dev) | UI |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    Nav.jsx       # sticky header
    Hero.jsx      # full-screen landing section
    About.jsx     # about + stats
    Projects.jsx  # app showcase cards
    Footer.jsx    # links + privacy note
  App.jsx
  main.jsx
  index.css
public/
  assets/         # logo files used on the page
```

## Apps featured

- **[Skillfolio](https://skillfolio.dev)** — portfolio generator
- **[Lexie](https://lexie.codecrumbs.in)** — AI language tutor chatbot

## License

MIT — see [LICENSE](LICENSE).
