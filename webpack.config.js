const path = require("path");

module.exports = [
  {
    entry: "./src/index.js",
    target: "node",
    node: {
      __dirname: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  },
  {
    entry: "./src/client.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "client.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  }
];
