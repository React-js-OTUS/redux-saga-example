import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'src/store/index';

const initialState: {
  todos: unknown[];
  error: Error;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
} = {
  todos: [],
  status: 'idle',
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchTodos: (state) => {
      state.status = 'loading';
    },
    fetchTodosSuccess: (state, action: { payload: unknown[] }) => {
      state.status = 'succeeded';
      state.todos.push(...action.payload);
    },
    fetchTodosFailure: (state, action: { payload: Error }) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const todosActions = todosSlice.actions;

export const todosSelectors = {
  get: (state: AppState): AppState['todos'] => state.todos,
};

export const todos = todosSlice.reducer;
