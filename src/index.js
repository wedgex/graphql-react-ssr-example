const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
const Html = require("./components/Html");
const App = require("./components/App");

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
server.use("/assets", express.static("dist"));

server.listen(3000, () => console.log("listening on port 3000"));
