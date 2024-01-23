import { createSlice } from "@reduxjs/toolkit";

export interface InitialProps {
  status: string;
  singleTodo: Object;
  todos: Array<any>;
  errors: null;
}

const initialState: InitialProps = {
  status: "pending",
  singleTodo: {},
  todos: [],
  errors: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos?.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.singleTodo = state.todos?.filter(
        (todo) => todo.id === action.payload
      );
    },
    updateTodo: (state, action) => {
      const updateTodo = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === updateTodo.id);
      state.todos[index] = updateTodo;
    },
    isCheckedTodo: (state, action) => {
      const singleTodo = state.todos.find((todo) => todo.id === action.payload);
      if (singleTodo.checked) {
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, checked: false } : todo
        );
      } else if (!singleTodo.checked) {
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, checked: true } : todo
        );
      }
    },
    sortTodo: (state) => {
      state.todos.sort((a, b) => {
        if (a.checked && !b.checked) {
          return -1;
        } else if (!a.checked && b.checked) {
          return 1;
        } else {
          return a.id - b.id;
        }
      });
    },
  },
});

export const {
  addTodos,
  deleteTodo,
  editTodo,
  updateTodo,
  isCheckedTodo,
  sortTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
