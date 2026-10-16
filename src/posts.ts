import { getCollection } from 'astro:content';
import type { Locale } from './i18n';

export async function getLocalizedPosts(locale: Locale) {
	const originals = await getCollection('blog', ({ data }) => !data.draft);
	if (locale === 'zh') return originals.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	const translations = new Map(
		(await getCollection('blogEn', ({ data }) => !data.draft)).map((post) => [post.id, post]),
	);
	return originals
		.map((post) => translations.get(post.id) ?? post)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
