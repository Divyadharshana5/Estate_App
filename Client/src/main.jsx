import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { SocketContext } from "./Context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContext>
        <App />
      </SocketContext>
    </AuthContextProvider>
  </React.StrictMode>
);
