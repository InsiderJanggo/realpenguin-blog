---
    title: 'CRUD API Route'
    description: 'For use with Next.js.'
    slug: 'crud-api-route'
    logo: 'react.png'
    createdAt: '05/03/2022'
--- 

```js
    /**
    *
    * @param {import('next').NextApiRequest} req
    * @param {import('next').NextApiResponse} res
    */
    export default async function handler(req, res) {
        res.status(200).json({
            message: 'Welcome to my API'
        })
    }
```

