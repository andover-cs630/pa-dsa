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
		{ text: 'Introduction', link: 'Markdown/introduction' },
		{ text: 'Pointers & Objects', link: 'Markdown/pointers-and-object-contents' },
	],
	'Elementary Structures': [
		{ text: 'Introduction to Graphs', link: '	introduction-to-graphs/' },
		{ text: 'Linked List', link: 'Markdown/LinkedList' },
		{ text: 'Queues', link: 'Markdown/queues' },
		{ text: 'Rooted Trees', link: 'Markdown/rooted-trees' },
	],

	'Advanced Structures': [
		{ text: 'Binary Search Tree', link: 'Markdown/binary-search-trees' },
		{ text: 'Hash Tables', link: 'Markdown/hash-tables' },
		{ text: 'Red Black Trees', link: 'Markdown/RedBlackTrees' },
	],

	'Algorithms': [
		{ text: 'Heapsort', link: 'Markdown/heapsort' },
		{ text: 'Quicksort', link: 'Markdown/quicksort' },
		{ text: 'Lower Bounds of Sorting', link: 'Markdown/lower-bounds-of-sorting' },
		{ text: 'Graphing Algorithms', link: 'Markdown/graphing-algorithms' },
	],
};
