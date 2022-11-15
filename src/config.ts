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
		{ text: 'Prerequisites', link: 'articles/prerequisites' },
		{ text: 'Pointers & Objects', link: 'articles/pointers-and-objects' },
	],
	'Elementary Structures': [
		{ text: 'Introduction to Graphs', link: 'articles/introduction-to-graphs/' },
		{ text: 'Linked List', link: 'articles/linked-lists' },
		{ text: 'Queues', link: 'articles/queues' },
		{ text: 'Trees', link: 'articles/rooted-trees' },
		{ text: 'Stacks', link: 'articles/stacks' },
	],

	'Advanced Structures': [
		{ text: 'Binary Search Tree', link: 'articles/binary-search-trees' },
		{ text: 'Hash Tables', link: 'articles/hash-tables' },
		{ text: 'Red Black Trees', link: 'articles/red-black-trees' },
	],

	'Algorithms': [
		{ text: 'Heapsort', link: 'articles/heapsort' },
		{ text: 'Quicksort', link: 'articles/quicksort' },
		{ text: 'Counting Sort', link: 'articles/counting-sort' },
		{ text: 'Lower Bounds of Sorting', link: 'articles/lower-bounds-of-sorting' },
		{ text: 'Graphing Algorithms', link: 'articles/graphing-algorithms' },
		{ text: 'Dynamic Programming', link: 'articles/dynamic-programming' },
	],
};
