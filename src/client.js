const React = require("react");
const ReactDOM = require("react-dom");
const { ApolloClient, InMemoryCache, HttpLink } = require("apollo-boost");
const { ApolloProvider } = require("react-apollo");
const Html = require("./components/Html");
const App = require("./components/App");

window.addEventListener("DOMContentLoaded", () => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: "/graphql" }),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
  });

  ReactDOM.hydrate(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("app")
  );
});
