export type Locale = 'zh' | 'en';

export const localePath = (path: string, locale: Locale) =>
	locale === 'en' ? `/en${path}` : path;

export const localeFromPath = (path: string): Locale =>
	path === '/en' || path.startsWith('/en/') ? 'en' : 'zh';

const tags: Record<string, string> = {
	博客: 'Blog',
	写作: 'Writing',
	阅读: 'Reading',
	笔记: 'Notes',
	生活: 'Life',
	随笔: 'Essays',
};

export const translateTag = (tag: string, to: Locale) => {
	if (to === 'en') return tags[tag] ?? tag;
	return Object.entries(tags).find(([, english]) => english === tag)?.[0] ?? tag;
};

export function alternateUrl(url: URL, to: Locale) {
	const current = localeFromPath(url.pathname);
	let basePath = current === 'en' ? url.pathname.replace(/^\/en(?=\/|$)/, '') || '/' : url.pathname;
	if (basePath === '/404/' || basePath === '/404.html') basePath = to === 'en' ? '/404/' : '/404.html';
	const alternate = new URL(localePath(basePath, to), url.origin);
	for (const [key, value] of url.searchParams) {
		alternate.searchParams.set(key, key === 'tag' ? translateTag(value, to) : value);
	}
	return alternate.pathname + alternate.search;
}
