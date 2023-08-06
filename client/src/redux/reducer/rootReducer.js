import { combineReducers } from "redux";
import cardResultReducer from "./cardResult";

const rootReducer = combineReducers({
  cardResult: cardResultReducer,
});

export default rootReducer;
