import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CHANGE_TAB } from "./types";

export let addTodoAction = (payload) => {
  return { type: ADD_TODO, payload };
};
export let deleteTodoAction = (payload) => {
  return { type: DELETE_TODO, payload };
};
export let toggleTodoAction = (payload) => {
  return { type: TOGGLE_TODO, payload };
};
export let changeTabAction = (payload) => {
  return { type: CHANGE_TAB, payload };
};
