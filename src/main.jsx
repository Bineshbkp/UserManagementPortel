import React from "react";
import App from './pages/App';
import "./index.css";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./pages/employee/store";



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
