# Using the Figure Component in MDX

This guide explains how to use the `Figure` component in your MDX files for consistent image presentation.

## Basic Usage

The simplest way to use the Figure component:

```jsx
<Figure
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  caption="Your caption text"
/>
```

## Alignment Options

The Figure component supports three alignment options:

### Left-aligned (Default)

```jsx
<Figure
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  caption="Left-aligned caption"
  align="left"
/>
```

### Center-aligned

```jsx
<Figure
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  caption="Center-aligned caption"
  align="center"
/>
```

### Right-aligned

```jsx
<Figure
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  caption="Right-aligned caption"
  align="right"
/>
```

## Custom Dimensions

You can specify custom dimensions for your images:

```jsx
<Figure
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  caption="Custom dimensions"
  width={800}
  height={600}
/>
```

## Legacy Support

For backward compatibility, the older `Frame` component syntax will continue to work:

```jsx
<Frame caption="Your caption">
  <Image src="/path/to/image.jpg" alt="Descriptive alt text" />
</Frame>
```

However, we recommend using the new `Figure` component for all new content as it's more concise and offers better alignment options.

## Best Practices

1. Always include descriptive `alt` text for accessibility
2. Keep captions concise but informative
3. Choose appropriate alignment based on your content layout
4. Use consistent image dimensions throughout your article for visual harmony
