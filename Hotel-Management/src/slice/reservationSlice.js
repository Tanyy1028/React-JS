import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReservations = createAsyncThunk("reservations/fetch", async () => {
  const res = await fetch("http://localhost:3000/reservations");
  return res.json();
});

export const makeReservation = createAsyncThunk(
  "reservations/add",
  async (data) => {
    const res = await fetch("http://localhost:3000/reservations", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  }
);

export const cancelReservation = createAsyncThunk(
  "reservations/delete",
  async (id) => {
    await fetch(`http://localhost:5000/reservations/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

const reservationSlice = createSlice({
  name: "reservations",
  initialState: { data: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(makeReservation.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(cancelReservation.fulfilled, (state, action) => {
        state.data = state.data.filter((r) => r.id !== action.payload);
      });
  },
});

export default reservationSlice.reducer;
