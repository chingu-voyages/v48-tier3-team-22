import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";
import newsReducer from "./news";

export default configureStore({
  reducer: {
    user: userReducer,
    news: newsReducer,
  },
});
