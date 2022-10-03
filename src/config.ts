export const SITE = {
	title: "Data Structures and Algorithms",
	description: "An online textbook created by Phillips Academy's CSC630 class for data structures and algorithms in computer science.",
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://i.postimg.cc/rFNcNRkT/og-default.png',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
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
		{ text: 'Lorem Ipsum', link: 'lorem-ipsum' },
	],
	'Article Demo': [
		{ text: 'Introduction to Graphs', link: 'introduction-to-graphs' }
	],
};
