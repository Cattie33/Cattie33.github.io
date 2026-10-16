# 咪的事件簿

用 Astro 构建的个人博客。参考 [Homeward Sky](https://homeward-sky.top/) 的栏目组织方式，包含首页、文章列表、标签筛选、关键词搜索、文章页、关于、友链、RSS、站点地图，以及可在所有页面使用的中英文切换和深浅色阅读模式。页面与文字为独立实现。

## 本地运行

需要 Node.js 22.22.0 或更高版本。

```bash
npm install
npm run dev
```

运行 `npm run build` 可生成 GitHub Pages 使用的静态文件，输出在 `dist/`。

## 修改内容

- `src/consts.ts`：站点名称、简介、署名与 GitHub 链接。
- `src/components/Home.astro`：首页介绍与最近文章。
- `src/pages/about.astro`：个人介绍。
- `src/pages/friends.astro`：友链。
- `src/content/blog/`：Markdown/MDX 文章。目前公开的三篇均标记为“示例文章”，可以逐篇替换或删除。
- `src/content/blog-en/`：文章的英文版。与中文文章使用相同文件名；暂时没有译文时，英文文章页会显示中文原文和提示。
- `src/pages/en/`：关于、友链等页面的英文版。
- `public/images/bear-logo.png`：页眉和浏览器标签页使用的小熊照片 logo。
- `design/bear-video/`：小熊拍摄风景的 6 秒静音循环视频草稿、海报图和可重制的素材；确认画面后可放进页脚。

新文章示例：

```md
---
title: '我的第一篇文章'
description: '一句话摘要。'
pubDate: 2026-10-16
tags: ['随笔']
---

正文从这里开始。
```

加上 `draft: true` 可让文章不出现在静态页面和 RSS 中。

如需给新文章添加英文版，在 `src/content/blog-en/` 新建同名 Markdown 文件，翻译标题、摘要、标签和正文。页眉语言按钮会在对应的中英文页面之间切换；阅读模式会保存在浏览器中。

## 部署到 GitHub Pages

博客已部署到 [https://cattie33.github.io/](https://cattie33.github.io/)，代码仓库是 [Cattie33/Cattie33.github.io](https://github.com/Cattie33/Cattie33.github.io)。GitHub Pages 的发布来源已设为 GitHub Actions。

以后修改文章或页面后，在本地运行：

```bash
git add .
git commit -m "Update blog"
git push
```

`.github/workflows/deploy.yml` 会在每次推送 `main` 后构建并部署站点。请保留 `package-lock.json`，GitHub Action 会根据它安装依赖。

如果最终仓库名称不是 `Cattie33.github.io`，需在 `astro.config.mjs` 中根据 [Astro 的 GitHub Pages 指南](https://docs.astro.build/en/guides/deploy/github/)调整 `site` 和 `base`，并更新站内链接。
