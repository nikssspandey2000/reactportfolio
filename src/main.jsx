// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+
import "./index.css"; // Global styles (optional, can be customized)

// Import your main App component
import App from "./App";

// Create the root element using ReactDOM.createRoot (for React 18+)
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create root for React 18
  root.render(
    <React.StrictMode>
      {/* Wrap the app with StrictMode to help with identifying potential problems in the app */}
      <App />
    </React.StrictMode>
  );
}
