// define route path

import cards from "../assets/cards/index";

const PAGE = {
  MAIN: "/",
  CARD_EXPLANATION: "/card-explanation",
  LOGING: "/login",
  SAMPLE: "/sample",
  GRINGOTTS: "/gringotts",
};

const ROUTES = {
  MAIN: {
    MAIN: PAGE.MAIN,
    CARD_EXPLANATION: PAGE.CARD_EXPLANATION,
    GRINGOTTS: PAGE.GRINGOTTS,
  },
  LOGIN: PAGE.LOGING,
  SAMPLE: PAGE.SAMPLE,
};

cards.forEach((card) => {
  ROUTES.MAIN[
    card.route.split(" ").join("").toUpperCase()
  ] = `/${card.route.toLowerCase()}`;
});

export default ROUTES;
