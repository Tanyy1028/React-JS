import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../slice/roomSlice";
import reservationReducer from "../slice/reservationSlice";
import authReducer from "../slice/authSlice";

export const store = configureStore({
  reducer: {
    rooms: roomReducer,
    reservations: reservationReducer,
    auth: authReducer,
  },
});
