import {
  CARD_TYPE,
  SINGLE_CARD_RESULT,
  THREE_CARDS_RESULT,
} from "../action/action-types";

const initialState = {
  cardType: null,
  singleCard: null,
  threeCards: null,
};

export function cardResultReducer(state = initialState, action) {
  switch (action.type) {
    // 儲存 牌型
    case CARD_TYPE:
      return { ...state, cardType: action.payload.type };
    // 儲存 單牌結果
    case SINGLE_CARD_RESULT:
      return { ...state, singleCard: action.payload.card };
    // 儲存 三牌結果
    case THREE_CARDS_RESULT:
      return { ...state, threeCards: action.payload.cards };
    default:
      return state;
  }
}

export default cardResultReducer;
