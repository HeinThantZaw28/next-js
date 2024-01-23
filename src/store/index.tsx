import todoReducer from "@/features/todo/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
