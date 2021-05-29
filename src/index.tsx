import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Reset } from "styled-reset";

import MainPage from "./components/MainPage/MainPage";
import TopBar from "./components/TopBar/TopBar";
import { BrowserRouter as Router } from "react-router-dom";
import { store, StoreContext } from "./reducers/storeContext";

ReactDOM.render(
  <>
    <Reset />
    <StoreContext.Provider value={store}>
      <Router>
        <MainPage />
      </Router>
    </StoreContext.Provider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
