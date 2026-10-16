# 胖胖博客

用 Astro 构建的个人博客。参考 [Homeward Sky](https://homeward-sky.top/) 的栏目组织方式，包含首页、文章列表、标签筛选、关键词搜索、文章页、关于、友链、RSS、深浅色模式和站点地图。页面与文字为独立实现。

## 本地运行

需要 Node.js 22.22.0 或更高版本。

```bash
npm install
npm run dev
```

运行 `npm run build` 可生成 GitHub Pages 使用的静态文件，输出在 `dist/`。

## 修改内容

- `src/consts.ts`：站点名称、简介、署名与 GitHub 链接。
- `src/pages/index.astro`：首页介绍。
- `src/pages/about.astro`：个人介绍。
- `src/pages/friends.astro`：友链。
- `src/content/blog/`：Markdown/MDX 文章。目前的三篇均标记为“示例文章”，发布前请替换或删除。

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

## 部署到 GitHub Pages

1. 在 GitHub 创建公开仓库 `Cattie33.github.io`，不要让 GitHub 自动添加 README 或其他初始文件。
2. 在仓库 **Settings → Pages** 中把 **Build and deployment → Source** 设为 **GitHub Actions**。
3. 本地运行以下命令，将代码推送到 `main`：

```bash
git add .
git commit -m "Build Astro personal blog"
git remote add origin https://github.com/Cattie33/Cattie33.github.io.git
git push -u origin main
```

`.github/workflows/deploy.yml` 会在每次推送 `main` 后构建并部署站点。网址是 `https://cattie33.github.io/`。请保留 `package-lock.json`，GitHub Action 会根据它安装依赖。

如果最终仓库名称不是 `Cattie33.github.io`，需在 `astro.config.mjs` 中根据 [Astro 的 GitHub Pages 指南](https://docs.astro.build/en/guides/deploy/github/)调整 `site` 和 `base`，并更新站内链接。
