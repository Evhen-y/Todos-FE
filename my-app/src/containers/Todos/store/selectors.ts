import { createSelector } from "reselect";
import {IAppState} from "@shared/"



const selectTodo = (state: IAppState) => state.todosReduser;
export const getTodos = () => createSelector(selectTodo, (state) => state.todos);
export const getTodo = () => createSelector(selectTodo, (state) => state.todo);


