import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  // ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
};

root.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>
);
