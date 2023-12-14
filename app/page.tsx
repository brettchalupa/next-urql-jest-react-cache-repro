export const metadata = {
  title: 'App Router',
}

import { cacheExchange, createClient, fetchExchange, gql } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';

const makeClient = () => {
  return createClient({
    url: 'https://trygql.formidable.dev/graphql/basic-pokedex',
    exchanges: [cacheExchange, fetchExchange],
  });
};

const { getClient } = registerUrql(makeClient);

export default function Page() {
  return <h1>App Router</h1>
}
