# My first next.js project

This project was developed by following the official [Next.js Starter](https://nextjs.org/learn)

## Requirements

- Node.js 10.13+
- I'll be using [`pnpm`](https://pnpm.io/)

## Creating the project

```bash
pnpx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

swapping npm with pnpm
```ps1
cd nextjs-blog
rm package-lock.json
# windows
rm -Force -Recurse node_modules
# linux
rm -rf node_modules

pnpm i
```

disabling telemetry
```bash
pnpx next telemetry disable
```

## Running the app

```bash
pnpm run dev
```

