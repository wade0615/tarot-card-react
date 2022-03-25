import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTES from "./config/router.config";
import "./index.css";
import Nav from "./components/Nav";
import Home from "./layouts/home";
import Library from "./layouts/Library";
import CardExplanation from "./layouts/CardExplanation";
import reportWebVitals from "./reportWebVitals";

import cards from "./assets/cards/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path={ROUTES.MAIN.MAIN} element={<Home />} />
        <Route
          exact
          path={ROUTES.MAIN.CARD_EXPLANATION}
          element={<Library />}
        />
        {cards.map((card) => (
          <Route
            key={card.route}
            exact
            path={ROUTES.MAIN[card.route.split(" ").join("").toUpperCase()]}
            element={<CardExplanation />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
