import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import blogReducer from "./slices/blogSlice";

const storeRedux = configureStore({
  reducer: {
    count: counterReducer,
    blog: blogReducer,
  },
});

export default storeRedux;
