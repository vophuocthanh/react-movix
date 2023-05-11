import { combineReducers, configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";

const reducers = combineReducers({
  home: homeSlice,
});

export const store = configureStore({
  reducer: reducers,
});
