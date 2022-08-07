import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/App";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);
