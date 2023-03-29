import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: String(import.meta.env.VITE_HYGRAPH_URI),
  cache: new InMemoryCache()
});

export { client };