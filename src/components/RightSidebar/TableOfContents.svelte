<script lang="ts">
    import { onMount } from "svelte";
    import type { MarkdownHeading } from "astro";

    export let headings: MarkdownHeading[];

    type ItemOffset = {
        id: string,
        topOffset: number
    };

    let scrollY: number;
    let titles: NodeListOf<Element>;
    let itemOffsets: ItemOffset[] = [];

    onMount(() => {
        titles = document.querySelectorAll('article :is(h1, h2, h3, h4, h5, h6)');
        itemOffsets = Array.from(titles).map(title => ({
            id: title.id,
            topOffset: title.getBoundingClientRect().top + window.scrollY
        }));
    })
</script>

<svelte:window bind:scrollY={scrollY} />

<h2 class="heading">On this page</h2>
<ol>
    <li class="heading-link">
        <a href="#overview">
            Overview
        </a>
    </li>
    {#each headings as heading}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <li class="heading-link depth-{heading.depth}"
            class:active={
                itemOffsets.at(
                    itemOffsets.lastIndexOf(
                        itemOffsets.filter(
                            (entry) => entry.topOffset <= scrollY
                        ).at(-1) ?? { id: '', topOffset: -1 }
                    ) + 1
                )?.id === heading.slug
            }
            tabindex=0
        >
            <a href="#{heading.slug}">
                {heading.text}
            </a>
        </li>
    {/each}
</ol>

<style>
    li {
        border-left: 4px solid transparent;
        padding-right: 2em;
    }
    .active {
        border-left: 4px solid var(--color-blue-dark);
        background-color: var(--color-blue-light);
    }
    li:hover:not(.active), li:focus:not(.active) {
        border-left: 4px solid var(--color-blue-light);
        background-color: var(--color-blue-xlight);
    }
</style>