# salman01zp.github.io

Personal site — About, Books, and Blog. Built with [Astro](https://astro.build) + MDX.

## Structure

```text
/
├── src/
│   ├── content/blog/       # blog posts (.mdx)
│   ├── content.config.ts   # content collection schema
│   ├── data/books.ts       # book list shown on the homepage
│   ├── layouts/            # BaseLayout, PostLayout
│   ├── pages/
│   │   ├── index.astro     # About / Books / Blog sections
│   │   └── blog/           # blog index + [...id] post route
│   └── styles/global.css   # global styles (responsive, light/dark)
└── .github/workflows/deploy.yml
```

## Writing a post

Add a new `.mdx` file to `src/content/blog/` with frontmatter:

```md
---
title: "Post title"
description: "One-line summary."
date: 2026-07-11
---

Post content here.
```

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`        | Start local dev server at `localhost:4321`   |
| `npm run build`      | Build production site to `./dist/`           |
| `npm run preview`    | Preview the build locally                    |

## Deployment

Pushes to `main` build and deploy automatically via GitHub Actions
(`.github/workflows/deploy.yml`) to GitHub Pages. In the repo settings,
set **Pages → Build and deployment → Source** to **GitHub Actions**.
