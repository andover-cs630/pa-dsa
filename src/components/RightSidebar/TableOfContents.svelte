<script lang="ts">
    import type { MarkdownHeading } from "astro";

    export let headings: MarkdownHeading[];
</script>

<h2 class="heading">On this page</h2>
<ol>
    <li class="heading-link">
        <a href="#overview">
            Overview
        </a>
    </li>
    {#each headings as heading}
        <li class="heading-link depth-{heading.depth}">
            <a href="#{heading.slug}">
                {heading.text}
            </a>
        </li>
    {/each}
</ol>

<style>
    a {
        color: blue;
    }
</style>