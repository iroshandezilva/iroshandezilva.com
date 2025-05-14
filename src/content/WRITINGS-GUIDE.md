# Blog Post Guide

This guide explains how to format your writings posts and use special features in your MDX files.

## Basic Frontmatter Structure

Every writings post should include the following frontmatter at the top of the MDX file:

```mdx
---
title: Your Blog Post Title
date: "YYYY-MM-DD"
excerpt: A short summary of your post (will be displayed in writings listings)
coverImage: "/path/to/your/image.jpg"
tags: ["Tag1", "Tag2", "Tag3"]
---
```

## Featured Posts

To mark a post to be featured in the bento grid layout on the writings homepage, add the `featured` flag to the frontmatter:

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

Up to 5 posts marked as `featured: true` will be displayed in the featured section. If you mark more than 5 posts as featured, only the 5 most recent ones will be shown in the grid.

If no posts are explicitly marked as featured, the system will automatically display the 5 most recent posts in the featured section.

## Using the Figure Component

For images within your blog posts, use the `Figure` component. It provides consistent styling and supports captions and different alignments:

```mdx
<Figure
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  caption="Your caption text"
/>
```

### Alignment Options

The Figure component supports three alignment options:

```mdx
<!-- Left-aligned (default) -->

<Figure
  src="/path/to/image.jpg"
  alt="Alt text"
  caption="Left-aligned caption"
/>

<!-- Center-aligned -->

<Figure
  src="/path/to/image.jpg"
  alt="Alt text"
  caption="Center-aligned caption"
  align="center"
/>

<!-- Right-aligned -->

<Figure
  src="/path/to/image.jpg"
  alt="Alt text"
  caption="Right-aligned caption"
  align="right"
/>
```

For more details, see the [FIGURE-GUIDE.md](/src/content/FIGURE-GUIDE.md).

## Tips for Creating Great Blog Posts

1. Use a clear, descriptive title
2. Always include a high-quality cover image (recommended aspect ratio: 16:9 or 4:3)
3. Add meaningful tags to help categorize your content
4. Keep excerpts concise but informative (ideally 1-2 sentences)
5. Use headings (## and ###) to structure your content
6. Include code snippets, callouts, and other MDX components to enhance your posts

## Example of a Well-Formatted Post

```mdx
---
title: Building a Modern Blog with Next.js and MDX
date: "2025-05-08"
excerpt: Explore how to create a fast, SEO-friendly writings with Next.js and MDX
coverImage: "/images/writings-cover.jpg"
tags: ["Next.js", "MDX", "Web Development"]
featured: true
---

# Building a Modern Blog with Next.js and MDX

Introduction paragraph goes here...

## Section Heading

Content for this section...

<Figure
  src="/images/example-screenshot.jpg"
  alt="Screenshot of a Next.js blog homepage"
  caption="A modern blog built with Next.js and MDX"
  align="center"
/>

<Callout variant="note" title="Note">
  Important information that deserves attention.
</Callout>

### Sub-Section

More detailed information...
```
