import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: null,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterChange = (filter) => {
  return async (dispatch) => {
    dispatch(setFilter(filter));
  };
};

export default filterSlice.reducer;
