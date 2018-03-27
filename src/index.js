const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
const bodyParser = require("body-parser");
const { graphiqlExpress } = require("apollo-server-express");
const Html = require("./components/Html");
const App = require("./components/App");
const GraphqlServer = require("./data/GraphqlServer");

const server = express();

server.get("/", (req, res) => {
  res.send(
    `<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(
      <Html>
        <App />
      </Html>
    )}`
  );
});

server.use("/graphql", bodyParser.json(), GraphqlServer.create());
server.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
server.use("/assets", express.static("dist"));

server.listen(3000, () => console.log("listening on port 3000"));
