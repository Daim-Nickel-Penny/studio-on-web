import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import lyrics from "./lyrics";

const reducer = combineReducers({
  lyrics,
});

const store = configureStore({
  reducer,
});

export default store;
