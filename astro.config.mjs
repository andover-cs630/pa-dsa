import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import m2dx from "astro-m2dx";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
    integrations: [
        preact(),
        mdx()
    ],
    markdown: {
        remarkPlugins: [
            remarkGfm,
            remarkMath,
            [m2dx, {
                frontmatter: true,
                relativeImages: true,
            }],
        ],
        rehypePlugins: [
            [rehypeKatex, {/** KaTeX options */}],
        ],
        shikiConfig: {
            theme: "one-dark-pro",
            wrap: true,
        },
    },
  site: "https://pa-dsa.vercel.app"
});