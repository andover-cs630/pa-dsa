export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
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
	ogLocale?: string;
};

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

export type Sidebar = Record<
	string, { text: string; link: string }[]
>;
export const SIDEBAR: Sidebar = {
	'Section Header': [
		{ text: 'Introduction', link: 'introduction' },
		{ text: 'Page 2', link: 'page-2' },
		{ text: 'Page 3', link: 'page-3' },
	],
	'Another Section': [{ text: 'Page 4', link: 'page-4' }],
};
