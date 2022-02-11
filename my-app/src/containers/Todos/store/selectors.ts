import { createSelector } from "reselect";
import { ITodosState } from ".";

interface IAppState {
  todosRedusers: ITodosState;
}

const selectTodo = (state: IAppState) => state.todosRedusers;
export const getTodos = () => createSelector(selectTodo, (state) => state.todos);
export const getTodo = () => createSelector(selectTodo, (state) => state.todo);
