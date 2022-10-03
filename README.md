# Data Structures and Algorithms Textbook

An online textbook for data structures and algorithms, created by Phillips Academy's CSC630 class.

## Features

- ✅ **Full Markdown support**
- ✅ **Responsive mobile-friendly design**
- ✅ **Sidebar navigation**
- ✅ **Automatic table of contents**

## Commands Cheatsheet

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

Check out the [Astro documentation](https://docs.astro.build).

## Site metadata

`src/config.ts` contains several data objects that describe metadata about the site like title, description, default language, and Open Graph details. These can be customized.

## CSS styling

The theme's look and feel is controlled by a few key variables. You'll find them in the `src/styles/theme.css` CSS file.

The site currently uses a "cool blue" theme. To change this, adjust the `--theme-accent` variable to a new color.

```diff
/* src/styles/theme.css */
:root {
  color-scheme: light;
-  --theme-accent: hsla(var(--color-blue), 1);
+  --theme-accent: hsla(var(--color-red), 1);   /* or: hsla(#FF0000, 1); */
```

## Page metadata

Astro uses frontmatter in Markdown pages to choose layouts and pass properties to those layouts. If you are using the default layout, you can customize the page in many different ways to optimize SEO and other things. For example, you can use the `title` and `description` properties to set the document title, meta title, meta description, and Open Graph description.

```markdown
---
title: Example title
description: Really cool docs example that uses Astro
layout: ../layouts/MainLayout.astro
---

# Page content...
```

For more SEO related properties, look at `src/components/HeadSEO.astro`.

## Sidebar navigation

The sidebar navigation is controlled by the `SIDEBAR` variable in the `src/config.ts` file. You can customize the sidebar by modifying this object.

```ts
export const SIDEBAR = {
  "Section Header": [
    { text: "Introduction", link: "introduction" },
    { text: "Page 2", link: "page-2" },
    { text: "Page 3", link: "page-3" }
  ],
  "Another Section": [
    { text: "Page 4", link: "page-4" }
  ]
};
```