import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import m2dx from "astro-m2dx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), svelte()],
  markdown: {
    remarkPlugins: [
      [m2dx, {
        relativeImages: true,
      }],
      remarkGfm,
      remarkMath,
    ],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  },
  site: "https://pa-dsa.vercel.app"
});