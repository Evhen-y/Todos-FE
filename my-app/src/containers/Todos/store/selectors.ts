import { createSelector } from "reselect";
import { IAppState } from "@shared/";

const selectTodo = (state: IAppState) => state.todosReduser;
const selectFiltersTodos = (state: IAppState) => state.todosReduser.filterSettings;

export const getTodos = () => createSelector(selectTodo, (state) => state.todos);
export const getTodo = () => createSelector(selectTodo, (state) => state.todo);
export const getFilterSettings = () => createSelector(selectTodo, (state) => state.filterSettings);

export const getTodosFilter = () =>
  createSelector([selectTodo, selectFiltersTodos], (state, filter) => {
    const { search } = filter;
    console.log("filter_todo", filter);
    return state.todos.filter((todo) => todo.text.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase()));
    // return state.todos.filter((todo) => Object.values(todo.text)
    // .filter((value) => !!value).some((value) => value.toLowerCase().trim().includes(search)));
  });
