import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
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
            remarkMath
        ],
        rehypePlugins: [
            [rehypeKatex, {/** KaTeX options */}]
        ]
    },
  site: "https://pa-dsa.vercel.app"
});