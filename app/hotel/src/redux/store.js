import { configureStore } from "@reduxjs/toolkit";
import hotelmanager from "./slice/hotelmanager.slice";
const store = configureStore({
  reducer: {
    hotelmanager: hotelmanager,
  },
});
export default store;
