const React = require("react");
const client = require("file-loader!../client");

module.exports = props => (
  <html>
    <head>
      <title>GraphQL & React SSR Example</title>
    </head>
    <body>
      <div id="app">{props.children}</div>
      <script
        type="application/javascript"
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__ = ${JSON.stringify(
            props.apolloClient.extract()
          ).replace(/</g, "\\u003c")}`
        }}
      />
      <script type="application/javascript" src="/assets/client.js" />
    </body>
  </html>
);
