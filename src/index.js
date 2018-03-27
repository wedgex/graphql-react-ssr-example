const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
const bodyParser = require("body-parser");
const { graphiqlExpress } = require("apollo-server-express");
const { ApolloClient, InMemoryCache, HttpLink } = require("apollo-boost");
const { ApolloProvider, getDataFromTree } = require("react-apollo");
const fetch = require("isomorphic-fetch");
const Html = require("./components/Html");
const App = require("./components/App");
const GraphqlServer = require("./data/GraphqlServer");

const server = express();

const client = new ApolloClient({
  ssr: true,
  link: new HttpLink({
    uri: "http://localhost:3000/graphql",
    credentials: "same-origin",
    fetch
  }),
  cache: new InMemoryCache()
});

server.get("/", (req, res) => {
  const app = (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );

  getDataFromTree(app).then(() => {
    res.send(
      `<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(
        <Html apolloClient={client}>{app}</Html>
      )}`
    );
  });
});

server.use("/graphql", bodyParser.json(), GraphqlServer.create());
server.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
server.use("/assets", express.static("dist"));

server.listen(3000, () => console.log("listening on port 3000"));
