export const SITE = {
	title: "Data Structures and Algorithms",
	description: "An online textbook created by Phillips Academy's CSC630 class for data structures and algorithms in computer science.",
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://i.postimg.cc/rFNcNRkT/og-default.png',
		alt: "Data Structures and Algorithms textbook site banner"
	}
};

// This is the type of the frontmatter you put in the Markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
};

export type Sidebar = Record<
	string, { text: string; link: string }[]
>;
export const SIDEBAR: Sidebar = {
	'Intro': [
		{ text: 'Introduction', link: 'introduction' },
	],
	'Article Demos': [
		{ text: 'Introduction to Graphs', link: 'introduction-to-graphs' },
		{ text: 'Hash Tables', link: 'hash-tables' },
		{ text: 'Queues', link: 'queues' },
		{ text: 'Heapsort', link: 'heapsort' },
		{ text: 'Quicksort', link: 'quicksort' },
		{ text: 'Inline Code Snippets', link: 'code-snippets' },
		{ text: 'Inline Images', link: 'inline-images' },
		{ text: 'Inline Images 2', link: 'inline-images-2' },
	],
};
