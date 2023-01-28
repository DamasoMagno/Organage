import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl1dvaebb1fgc01z64ndx4cou/master",
  cache: new InMemoryCache()
});

export { client };