import {
  CARD_TYPE,
  SINGLE_CARD_RESULT,
  THREE_CARDS_RESULT,
} from "./action-types";

/**
 * @description 取得 牌型
 */
export const storeCardTypeAction = (type) => ({
  type: CARD_TYPE,
  payload: {
    type,
  },
});

/**
 * @description 取得 單牌 結果
 */
export const storeSingleCardAction = (card) => ({
  type: SINGLE_CARD_RESULT,
  payload: {
    card,
  },
});

/**
 * @description 取得 三牌 結果
 */
export const storeThreeCardsAction = (cards) => ({
  type: THREE_CARDS_RESULT,
  payload: {
    cards,
  },
});
