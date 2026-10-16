---
title: 'Starting Here (Sample Post)'
description: 'A sample post showing how to write and organize an article on this blog.'
pubDate: 2026-10-16
tags: ['Blog', 'Writing']
---

This is a **sample post** showing the layout of an article. You can replace or delete it when you publish your own writing.

## Why start a blog?

A personal writing space brings scattered thoughts together. Every post does not need a final answer; an idea can keep growing after you publish it.

## Writing the next post

Create a new `.md` file in `src/content/blog/` with a title, description, date, and tags at the top:

```yaml
---
title: 'My first post'
description: 'A short introduction to this post.'
pubDate: 2026-10-16
tags: ['Essays']
---
```

The post will appear on the home page, in the archive, and in the RSS feed. Add `draft: true` if you are not ready to publish it. To provide an English version, create a file with the same name in `src/content/blog-en/`.
