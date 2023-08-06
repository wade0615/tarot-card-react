import { createStore } from "redux";
import rootReducer from "../reducer/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for google plus see
);

export default store;
