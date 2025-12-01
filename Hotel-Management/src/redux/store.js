import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "./roomSlice";
import reservationSlice from "./reservationSlice";

const store = configureStore({
  reducer: {
    rooms: roomSlice,
    reservations: reservationSlice
  },
});

export default store;
