---
    title: 'Loading Progress'
    description: 'React Hook for nprogress.'
    slug: 'loading-progress'
    logo: 'react.png'
    createdAt: '16/03/2022'
--- 

```tsx
// components/nprogress.tsx
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Progress() {
  const router = useRouter();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const start = () => {
      timeout = setTimeout(NProgress.start, 100);
    };

    const done = () => {
      clearTimeout(timeout);
      NProgress.done();
    };

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', done);
    router.events.on('routeChangeError', done);
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', done);
      router.events.off('routeChangeError', done);
    };
  }, []);
  return <></>;
}
```

```css
/* nprogress.css */
/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #845ef7;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}
```

```tsx
// pages/_app.tsx
import '@styles/nprogress.css';
import type { AppProps } from 'next/app';
import NProgress from '../components/nprogress';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NProgress />
    </>
  );
}
```
