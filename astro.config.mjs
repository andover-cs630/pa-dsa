import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), svelte(), mdx()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [[rehypeKatex, {
      /** KaTeX options */
    }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  },
  site: "https://pa-dsa.vercel.app"
});