---
    title: 'Using the Spotify API with Next.js'
    slug: 'spotify-api-nextjs'
    desc: 'Learn how to authenticate with the Spotify API to fetch your top tracks in a Next.js API route.'
    image: '/posts/post2_banner.png'
    author:
        name: 'RealPenguin'
        img: 'https://pbs.twimg.com/profile_images/1497984319972786176/INedGtRX_400x400.jpg'
    category:
        color: 'green.500'
        name: 'Tutorial'
    createdAt: '8/3/2022'
---

# Using the Spotify API with Next.js

I wanted to display what song I'm currently listening to, as well as my top tracks. To accomplish this, I'd need to integrate Spotify's API with Next.js API routes. This post will be a quick tutorial to get up and running with Spotify.

## Create an Application

First, we need to create a Spotify application to give us credentials to authenticate with the API.

Go to your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) and log in.
Click Create an App.
Fill out the name and description and click create.
Click Show Client Secret.
Save your Client ID and Secret. You'll need these soon.
Click Edit Settings.
Add `http://localhost:3000` as a redirect URI.
All done! You now have a properly configured Spotify application and the correct credentials to make requests.

## Authentication

There are a variety of ways to authenticate with the Spotify API, depending on your application. Since we only need permission granted once, we'll use the [Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization/).

First, we'll have our application request authorization by logging in with whatever [scopes](https://developer.spotify.com/documentation/general/guides/authorization/) we need. Here's an example of what the URL might look like. Swap out the `client_id` and scopes for your own.

```bash
https://accounts.spotify.com/authorize?client_id=8e94bde7dd
b84a1f7a0e51bf3bc95be8&response_type=code&redirect_uri=http
%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20
user-top-read
```

After authorizing, you'll be redirected back to your `redirect_uri`. In the URL, there's a `code` query parameter. Save this value.

```
http://localhost:3000/callback?code=NApCCg..BkWtQ
```

Next, we'll need to retrieve the refresh token. You'll need to generate a Base 64 encoded string containing the client ID and secret from earlier. You can use [this tool](https://www.base64encode.org/) to encode it online. The format should be `client_id:client_secret`.

```bash
curl -H "Authorization: Basic <base64 encoded client_id:client_secret>"
-d grant_type=authorization_code -d code=<code> -d redirect_uri=http%3A
%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
```

This will return a JSON response containing a `refresh_token`. This token is [valid indefinitely](https://github.com/spotify/web-api/issues/374) unless you revoke access, so we'll want to save this in an environment variable.

## Using Spotify's API

Finally, we can get some real data! Inside Next.js, create three new values in your `.env.local` file.


```bash
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```

**Note:** If you haven't worked with environment variables in Next before, [give this a read first](https://nextjs.org/docs/basic-features/environment-variables).

We can now request an access token using our client ID, client secret, and `refresh_token`.


```js:lib/spotify.js
import querystring from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  });

  return response.json();
};
```

Use this `access_token` to securely request your top tracks.
This assumes you added the `user-top-read` scope at the beginning.

```js:lib/spotify.js
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};
```

### Creating an API Route

Let's test our communication with Spotify.
First, create a new file at `pages/api/top-tracks.js`.
Then, import the new function `getTopTracks`.

```js:pages/api/top-tracks.js
import { getTopTracks } from '../../lib/spotify';

export default async (_, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name
  }));

  return res.status(200).json({ tracks });
};
```

This will return the first ten top tracks, formatted to remove unnecessary information.
Feel free to modify this as you see fit.
If everything worked correctly, you should see some data like this after running `next dev`.

```json
// example web: https://leerob.io/api/top-tracks

{
  "tracks": [
    {
      "artist": "Jamie xx",
      "songUrl": "https://open.spotify.com/track/77Ezu3tBE7gmzQ4mRnZZUf",
      "title": "The Rest Is Noise"
    },
    {
      "artist": "Surfaces",
      "songUrl": "https://open.spotify.com/track/0NjSiGW8b5HYFfjdCbZzbg",
      "title": "Horizons"
    }
  ]
}
```