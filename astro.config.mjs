import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [
            'remark-math',
        ],
        rehypePlugins: [
            ['rehype-katex', {
            // Katex plugin options
            }]
        ]
    }
});