import React from "react";
import ReactDOM from "react-dom";
import "./App.css"; // Import Tailwind styles via App.css
import App from "./App"; // Main App component

// Render the App component into the root DOM element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
