// define route path

import cards from "../assets/cards/index";

const PAGE = {
  MAIN: "/",
  CARD_EXPLANATION: "/card-explanation",
  LOGING: "/login",
  SAMPLE: "/sample",
};

let ROUTES = {
  MAIN: {
    MAIN: PAGE.MAIN,
    CARD_EXPLANATION: PAGE.CARD_EXPLANATION,
  },
  LOGIN: PAGE.LOGING,
  SAMPLE: PAGE.SAMPLE,
};

cards.forEach((card) => {
  ROUTES.MAIN[
    card.ROUTE.split(" ").join("").toUpperCase()
  ] = `/${card.ROUTE.split(" ").join("-").toLowerCase()}`;
});
console.log(ROUTES);

export default ROUTES;
