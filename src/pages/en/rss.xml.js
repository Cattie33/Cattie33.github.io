import rss from '@astrojs/rss';
import { getLocalizedPosts } from '../../posts';
import { SITE_TITLE } from '../../consts';

export async function GET(context) {
	const posts = await getLocalizedPosts('en');
	return rss({
		title: SITE_TITLE,
		description: "Mi's stories and writing.",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/en/blog/${post.id}/`,
		})),
	});
}
