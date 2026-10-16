import rss from '@astrojs/rss';
import { getLocalizedPosts } from '../../posts';

export async function GET(context) {
	const posts = await getLocalizedPosts('en');
	return rss({
		title: 'Pangpang Blog',
		description: "Lehan Zhang's writing about ideas, reading, and everyday life.",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/en/blog/${post.id}/`,
		})),
	});
}
