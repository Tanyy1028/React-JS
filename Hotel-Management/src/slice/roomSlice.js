// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchRooms = createAsyncThunk("rooms/fetch", async () => {
//   const res = await fetch("http://localhost:3000/rooms");
//   return res.json();
// });

// const roomSlice = createSlice({
//   name: "rooms",
//   initialState: { data: [], loading: false },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRooms.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchRooms.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       });
//   },
// });

// export default roomSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  const response = await fetch("/rooms");
  return await response.json();
});

const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default roomSlice.reducer;
