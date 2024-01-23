import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";

ReactGA.initialize("G-LWGJTXBC9P");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

if (root.hasChildNodes()) {
  reactRoot.hydrate(<BrowserRouter>
    <App />
  </BrowserRouter>);
} else {
  reactRoot.render(<BrowserRouter>
    <App />
  </BrowserRouter>);
}
reportWebVitals();
