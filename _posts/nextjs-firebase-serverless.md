---
    title: 'Using Firebase with Next.js'
    slug: 'nextjs-firebase-serverless'
    desc: 'Learn how to use Firebase with Next.js and deploy it to Vercel.'
    image: '/posts/firebase_nextjs.png'
    author:
        name: 'RealPenguin'
        img: 'https://pbs.twimg.com/profile_images/1501480834427396096/VzoSniL__400x400.jpg'
    category:
        color: 'green.500'
        name: 'Tutorial'
    createdAt: '12/3/2022'
---

This guide will show you how to use Firebase 9+ with Next.js and deploy it to Vercel.

### Connecting to Firebase

1. Create a project in [Firebase](https://firebase.google.com/docs/firestore/quickstart).
1. In the Firebase console, open Settings > Service Accounts.
1. Click Generate New Private Key, then confirm by clicking Generate Key.
1. Download and open the JSON file containing your service account.
1. Create a new file `.env.local` and add environment variables with those values.

```bash:.env.local
NEXT_PUBLIC_FIREBASE_PROJECT_ID=replace-me
FIREBASE_CLIENT_EMAIL=replace-me
FIREBASE_PRIVATE_KEY=replace-me
```

Create `lib/firebase.js` to connect to Firebase using your credentials:

```js:lib/firebase.js
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
  });
}

const db = admin.firestore();

export { db };
```

### Fetching Data from Firebase

We can fetch data on the server from Firebase using an [API Route](https://nextjs.org/docs/api-routes/introduction) in Next.js. You'll need to create a new collection `users` and add a document `leerob` with a `name` string field if you're following this guide, but you can change that to whatever you want.

```js:pages/api/user.js
import { db } from '../../lib/firebase';

export default async function handler(req, res) {
  const user = await db.collection('users').doc('realpenguin').get();

  if (!user.exists) {
    return res.status(404).json({});
  }

  return res.status(404).json({ id: user.id, ...user.data() });
}
```

Let's break this down:

1. You'll make a request to `/api/users` from your frontend
1. A connection to Firestore is created using your service account
1. The API Route queries the `users` collection and returns the `leerob` document
1. We return the data for that document in the response

### Displaying Data on the Client

First, we need to install the correct dependencies:

```bash
$ npm i swr next@latest react@rc react-dom@rc
```

Finally, let's make a request to our API Route on the client-side using [SWR](https://swr.vercel.app) and Suspense:

```js:pages/index.js
import { Suspense } from 'react';
import useSWR from 'swr';

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

function Profile() {
  const { data } = useSWR('/api/user', fetcher, { suspense: true });
  return <div>Hello, {data.name}!</div>;
}

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Profile />
    </Suspense>
  );
}
```

Let's break this down:

1. When you request the root route (`/`) in your application, `pages/index.js` is rendered
1. React suspends the rendering of the page while fetching from `/api/user`
1. The fallback state (`<div>Loading...</div>`) is rendered while the data is being fetched
1. After the data is fetched, the fallback state is removed and the page is re-rendered
1. The `<Profile />` component shows `Hello, Lee Robinson!`
