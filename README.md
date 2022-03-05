# realpenguin-blog

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MD](https://www.markdownguide.org/)
- **Styling**: [Chakra Ui](https://chakra-ui.com/) And [Tailwind CSS](https://tailwindcss.com/)

## Overview
- `data/*` - data that is used for /about page.
- `_posts/*` - MD data that is used for blogs.uses.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/post/*` - Static pre-rendered blog pages using Markdown.
- `pages/*` - All other static pages.
- `public/*` - Static assets including fonts and images.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally
```bash
    $ git clone https://github.com/InsiderJanggo/realpenguin-blog.git
    $ cd realpenguin-blog
    $ npm install
    $ npm run dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/InsiderJanggo/realpenguin-blog/blob/main/.env.example).

## Cloning / Forking
Feel free to clone, but please remove all of my personal information (blog posts, images, etc.).