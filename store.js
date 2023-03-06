import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";
import alertReducer from "./features/notification/alertSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    alerts: alertReducer,
  },
});
