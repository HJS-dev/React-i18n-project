import React from "react";
import ReactDOM from "react-dom";
import "./i18next/i18n";
import App from "./App";
// import ready from './ready';
// import "./styles/App.css";


ReactDOM.render(
  <React.Suspense fallback={"...Loading"}>
    <App />
    {/* <React.StrictMode>
  </React.StrictMode> */}
  </React.Suspense>,
  document.getElementById("root")
);

// ready(() => {
//   ReactDOM.render(
//     <React.Suspense fallback={'ss'}>

//     <App />
//     </React.Suspense>
//     , document.getElementById("root"));
// });

