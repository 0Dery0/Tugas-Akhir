import { createSlice } from "@reduxjs/toolkit";

const initialValue = "";

export const listAuth = createSlice({
  name: "token",
  initialState: {
    tokens: initialValue,
    account: initialValue,
    id: initialValue,
    username: initialValue,
  },
  reducers: {
    addTokenAdmin: (state, action) => {
      state.tokens = action.payload.token;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.account = "Admin";
    },

    deleteToken: (state) => {
      state.tokens = "";
      state.id = "";
      state.username = "";
      state.account = "";
    },
  },
});

export const { addTokenAdmin, deleteToken } = listAuth.actions;
export default listAuth.reducer;