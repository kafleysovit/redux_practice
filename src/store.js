import { configureStore } from "@reduxjs/toolkit";
import manageData from "./redux";

export const store = configureStore({
  reducer: {
    managedata: manageData,
  },
});
