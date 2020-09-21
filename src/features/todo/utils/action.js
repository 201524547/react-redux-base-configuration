export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

import { createAction, createReducer } from '@reduxjs/toolkit';
export const addToDo = createAction('ADD_TODO', text => {
  return { payload: text };
});

const initialState = {
  list: [],
};
const reducer = createReducer(initialState, {
  [addTodo.type]: (state, action) => {
    const text = action.payload;
    state.input = text;
  },
  [completeTodo.type]: (state, action) => {
    const {} = action.payload;
  },
});

export default reducer;
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function completeTodo(index, completed) {
  return {
    type: COMPLETE_TODO,
    index,
    completed,
  };
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    index,
  };
}

export function changeTodo(index, text) {
  return {
    type: CHANGE_TODO,
    index,
    text,
  };
}
