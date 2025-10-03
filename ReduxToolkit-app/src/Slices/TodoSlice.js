import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
  name: "todo",

  initialState: {
    message: "this is todo",
    todos: []
  },

  reducers: {
    addtodo: (state, action) => {
      const data = action.payload;
      state.todos.push(data);
    },

    // removetodo: (state, action) => {}
    // updatetodo: (state, action) => {}
  }
});

export default todoslice.reducer;
export const { addtodo, removetodo, updatetodo } = todoslice.actions;
