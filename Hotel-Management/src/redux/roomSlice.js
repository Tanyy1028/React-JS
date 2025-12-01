import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRooms = createAsyncThunk("rooms/fetch", async () => {
  const res = await fetch("http://localhost:3000/rooms");
  return res.json();
});

const roomSlice = createSlice({
  name: "rooms",
  initialState: { rooms: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.rooms = action.payload;
        state.loading = false;
      });
  }
});

export default roomSlice.reducer;
