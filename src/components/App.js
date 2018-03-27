const React = require("react");
const Characters = require("./Characters");
const fetch = require("isomorphic-fetch");
const { ApolloClient, InMemoryCache, HttpLink } = require("apollo-boost");
const { ApolloProvider } = require("react-apollo");

const client = new ApolloClient({
  link: new HttpLink({ uri: "/graphql", fetch }),
  cache: new InMemoryCache()
});

module.exports = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>Characters</h1>
      <Characters />
    </div>
  </ApolloProvider>
);
