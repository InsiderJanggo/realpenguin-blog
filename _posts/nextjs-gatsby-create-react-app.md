---
    title: 'Next.js vs. Gatsby vs. Create React App'
    slug: 'nextjs-gatsby-create-react-app'
    desc: 'Which is the best for building React applications? Explore the pros and cons for all three options to make the right choice.'
    image: '/posts/nextjs-gatsby-create-react-app.jpg'
    author:
        name: 'RealPenguin'
        img: 'https://pbs.twimg.com/profile_images/1501480834427396096/VzoSniL__400x400.jpg'
    category:
        color: 'blue.500'
        name: 'Dev'
    createdAt: '11/3/2022'
---

There's never been a [better time](/blog/learn-nextjs) to learn React.
If you're just getting started, you might have heard about these three options:

- [Next.js](https://nextjs.org)
- [Gatsby](https://www.gatsbyjs.org/)
- [Create React App (CRA)](https://create-react-app.dev/)

However, it's not exactly clear when or why you would choose one over the other.
This post will highlight the key similarities and differences between the three solutions.

## Next.js

Next.js is a hybrid React framework that evolves with your product.
With Next, you can have static pages, server-rendered pages, and more all within the same framework.

> **Update (2020):** I now work at Vercel, so I'm biased towards Next.js. The cons listed below are the
> most common pain points from the community.

**Pros**

- ✅ Supports static sites and server-side rendering
- ✅ Best DX out of the three (Webpack support, Fast Refresh, error handling)
- ✅ Create full-stack apps with [API Routes](https://nextjs.org/docs/api-routes/introduction)

**Cons**

- ⛔️ Lack of built-in support for layouts
- ⛔️ Limited plugin system ([RFC](https://github.com/vercel/next.js/issues/9133))
- ⛔️ Server-rendering adds complexity

## Gatsby

The key difference between Next.js and Gatsby is that Gatsby doesn't use a server.
While Gatsby's main use case is for static sites, it can also re-hydrate into a fully-functional React application.

Gatsby comes bundled with GraphQL for data fetching. Here's a short example.

```jsx
import React from 'react';
import { graphql } from 'gatsby';

const HomePage = ({ data }) => {
  return <div>{data.site.siteMetadata.description}</div>;
};

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default HomePage;
```

You can use [Gatsby without GraphQL](https://www.gatsbyjs.org/docs/using-gatsby-without-graphql/) if you absolutely must, but it's one of the key features it promotes.

**Pros**

- ✅ Robust [plugin library](https://www.gatsbyjs.org/plugins/)
- ✅ GraphQL integration

**Cons**

- ⛔️ GraphQL knowledge potentially needed
- ⛔️ Debugging plugin issues can be difficult
- ⛔️ Potentially large build times (e.g. lots of images/fetches)

## Create React App

CRA helps you get started building React apps immediately with client-side rendering (CSR). There's much less to digest and understand.
Unfortunately, that also means there's less you get for free as you scale your application. When building large-scale React applications,
especially those with marketing pages, having server-rendering in the framework is very helpful.

**Pros**

- ✅ Easiest to learn
- ✅ Best choice for guaranteed single-page applications
- ✅ More hosting options (since a server isn't required)

**Cons**

- ⛔️ No server-side rendering
- ⛔️ No code-splitting out of the box ([can be configured](https://create-react-app.dev/docs/code-splitting/))
- ⛔️ Requires client-side routing library (e.g. React Router)
- ⛔️ "Ejecting" for custom use cases can add complexity

## Conclusion

Still not sure which one to choose? I would highly recommend reading [Rendering on the Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) for a deep-dive on where your rendering logic should live.

![rendering](/posts/rendering.jpg)