const React = require("react");
const ReactDOM = require("react-dom");
const Html = require("./components/Html");
const App = require("./components/App");

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.hydrate(<App />, document.getElementById("app"));
});
