import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from '@sentry/browser'
import App from "./components/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./styles/App.css";

Sentry.init({dsn: "https://eb870603b26b4f91b5f18324ac866b66@sentry.io/4394839"});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
