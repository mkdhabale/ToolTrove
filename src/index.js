import React from "react";
import ReactDOM from "react-dom"; // Import from 'react-dom' for React 17
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthState from "./context";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import storeRedux from "./store/redux";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <BrowserRouter>
    <Provider store={storeRedux}>
      <AuthState>
        <App />
      </AuthState>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root") // Render app to the root div
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
