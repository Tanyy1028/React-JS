// src/redux/reservationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReservations = createAsyncThunk(
  "res/fetch",
  async () => {
    const res = await fetch("http://localhost:3000/reservations");
    return res.json();
  }
);

export const makeReservation = createAsyncThunk(
  "res/add",
  async (data) => {
    const res = await fetch("http://localhost:3000/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return res.json();
  }
);

export const updateReservation = createAsyncThunk(
  "res/update",
  async ({ id, data }) => {
    const res = await fetch(`http://localhost:3000/reservations/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: Number(id), ...data })
    });
    return res.json();
  }
);

export const cancelReservation = createAsyncThunk(
  "res/delete",
  async (id) => {
    await fetch(`http://localhost:3000/reservations/${id}`, {
      method: "DELETE"
    });
    return Number(id);
  }
);

const reservationSlice = createSlice({
  name: "reservations",
  initialState: { reservations: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => { state.loading = true; })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.loading = false;
      })
      .addCase(makeReservation.fulfilled, (state, action) => {
        state.reservations.push(action.payload);
      })
      .addCase(updateReservation.fulfilled, (state, action) => {
        state.reservations = state.reservations.map(r => r.id === action.payload.id ? action.payload : r);
      })
      .addCase(cancelReservation.fulfilled, (state, action) => {
        state.reservations = state.reservations.filter((r) => r.id !== action.payload);
      });
  }
});

export default reservationSlice.reducer;
