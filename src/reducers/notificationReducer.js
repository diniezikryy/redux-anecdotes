import { createSlice } from "@reduxjs/toolkit";

/* const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "NEW_NOTIFICATION":
      return action.notification;
    case "HIDE_NOTIFICATION":
      return action.notification;
    default:
      return state;
  }
}; */

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    newNotification(state, action) {
      return action.payload;
    },
  },
});

export const { newNotification } = notificationSlice.actions;

export const createNotification = (notification, displayTime) => {
  return async (dispatch) => {
    dispatch(newNotification(notification));

    setTimeout(() => {
      dispatch(newNotification(null));
    }, displayTime * 1000);
  };
};

export default notificationSlice.reducer;
