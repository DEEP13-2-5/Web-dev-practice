import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};
//reducer function
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(), // call nanoid() function to generate unique ID
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo);
    },
    deletetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    MarkasDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: true }; // update the isDone property
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deletetodo, MarkasDone } = todoSlice.actions;
export default todoSlice.reducer;
