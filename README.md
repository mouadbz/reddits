This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

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

##API Endpoint
### Add links to Database with JSON body:
`POST: http://localhost:3000/api/generate` (CAN BE ADDED USING POSTMAN)
`{
    "links": [
        "https://www.reddit.com/r/food/comments/17xpndb/homemade_pomegranate_cranberry_tart/",
        "https://www.reddit.com/r/food/comments/17xpndb/homemade_pomegranate_cranberry_tarta/",
        "https://www.reddit.com/r/food/comments/17xpndb/homemade_pomegranate_cranberry_tarts/"
    ]
}`
### Get single link:
`GET: http://localhost:3000/api/generate`



