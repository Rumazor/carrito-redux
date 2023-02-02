import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "ruma",
  amount: 0,
};

const testSlice = createSlice({
  name: "test",
  initialState,
});

export default testSlice.reducer;
