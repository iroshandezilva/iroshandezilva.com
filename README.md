# Iroshan de Silva's Personal Website

This is my personal website built with [Next.js](https://nextjs.org), showcasing my portfolio, writings, and professional work as a UX designer.

## Project Overview

This website features:
- Portfolio of my design work and case studies
- Blog/writings section with MDX support
- About and contact information
- My professional tech stack

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Writing Blog Posts

This site supports writing blog posts using MDX. Here's how to add new content:

### Blog Post Structure

1. Create a new MDX file in the appropriate content directory
2. Add the required frontmatter at the top of your file:

```mdx
---
title: Your Blog Post Title
date: "YYYY-MM-DD"
excerpt: A short summary of your post (will be displayed in blog listings)
coverImage: "/path/to/your/image.jpg"
tags: ["Tag1", "Tag2", "Tag3"]
---
```

### Featured Posts

To mark a post to be featured in the bento grid layout on the blog homepage:

```mdx
---
title: Your Featured Blog Post Title
date: "YYYY-MM-DD"
excerpt: A short summary of your post
coverImage: "/path/to/your/image.jpg"
tags: ["Tag1", "Tag2", "Tag3"]
featured: true
---
```

### Using the Figure Component for Images

For images within your blog posts, use the `Figure` component:

```mdx
<Figure
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  caption="Your caption text"
  align="center" // Options: left (default), center, right
/>
```

### Tips for Creating Great Blog Posts

1. Use a clear, descriptive title
2. Always include a high-quality cover image (recommended aspect ratio: 16:9 or 4:3)
3. Add meaningful tags to help categorize your content
4. Keep excerpts concise but informative (ideally 1-2 sentences)
5. Use headings (## and ###) to structure your content
6. Include code snippets, callouts, and other MDX components to enhance your posts

## Project Structure

```
src/
  app/              # Next.js App Router files
  components/       # React components
  content/          # Blog content and guides
  config/           # Site configuration
  lib/              # Utility functions
  types/            # TypeScript types
```

For detailed guides on writing content:
- [Blog Post Guide](/src/content/BLOG-GUIDE.md)
- [Writings Guide](/src/content/WRITINGS-GUIDE.md)
- [Figure Component Guide](/src/content/FIGURE-GUIDE.md)

## Deployment

This site is built to be deployed on [Vercel](https://vercel.com).

To deploy your own version:

1. Fork this repository
2. Connect it to your Vercel account
3. Deploy the project

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/docs) (if you're using Tailwind)
