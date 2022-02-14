import { configureStore } from "@reduxjs/toolkit";

import anecdoteReducer from "./reducers/anecdoteReducer";
/* import filterReducer from "./reducers/filterReducer"; */
import notificationReducer from "./reducers/notificationReducer";

const store = configureStore({
  reducer: {
    anecdoteReducer: anecdoteReducer,
    notification: notificationReducer,
  },
});

export default store;
