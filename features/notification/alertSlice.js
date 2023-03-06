import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  alerts: [
    { id: 1, label: "SMS", value: false },
    { id: 2, label: "PUSH", value: false },
    { id: 3, label: "EMAIL", value: false },
  ],
  userSelectedType: null,
};

// Alert Slice
export const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    selectAlertType: (state, action) => {
      state.userSelectedType = action.payload;
    },
  },
});

export const { selectAlertType, toggleSelection } = alertSlice.actions;

export default alertSlice.reducer;
