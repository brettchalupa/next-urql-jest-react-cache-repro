# next.js + urql + jest error repro repo

1. `npx create-next-app@latest --example with-jest with-jest-app`
2. `cd with-jest-app`
3. `npm install --save @urql/next urql graphql`
4. follow these steps: https://formidable.com/open-source/urql/docs/advanced/server-side-rendering/#nextjs
5. `npx jest` fails with this error:

```
 FAIL  app/page.test.tsx
  ● Test suite failed to run

    TypeError: React.cache is not a function

      13 | };
      14 |
    > 15 | const { getClient } = registerUrql(makeClient);
         |                                   ^
      16 |
      17 | export default function Page() {
      18 |   return <h1>App Router</h1>

      at cache (node_modules/@urql/next/src/rsc.ts:27:27)
      at Object.<anonymous> (app/page.tsx:15:35)
      at Object.<anonymous> (app/page.test.tsx:9:54)

```

## key versions

- next 14.0.4
- urql 4.0.7
- @urql/next 1.0.1
- node 18.17.0

---

# Next.js + Jest

This example shows how to configure Jest to work with Next.js.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript. This example also shows how to use Jest with the App Router and React Server Components.

> **Note:** Since tests can be co-located alongside other files inside the App Router, we have placed those tests in `app/` to demonstrate this behavior (which is different than `pages/`). You can still place all tests in `__tests__` if you prefer.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-jest&project-name=with-jest&repository-name=with-jest)

## How to Use

Quickly get started using [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app#readme)!

In your terminal, run the following command:

```bash
npx create-next-app --example with-jest with-jest-app
```

```bash
yarn create next-app --example with-jest with-jest-app
```

```bash
pnpm create next-app --example with-jest with-jest-app
```

## Running Tests

```bash
npm test
```
