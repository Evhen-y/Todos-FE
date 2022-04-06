import { createSelector } from "reselect";
import { IAppState } from "@shared/";

const selectTodo = (state: IAppState) => state.todosReduser;
const selectFiltersTodos = (state: IAppState) => state.todosReduser.filterSearchSettings;
const selectAllFiltersTodos = (state: IAppState) => state.todosReduser.filterSettings;

export const getTodos = () => createSelector(selectTodo, (state) => state.todos);
export const getTodo = () => createSelector(selectTodo, (state) => state.todo);
export const getFilterSettings = () => createSelector(selectTodo, (state) => state.filterSearchSettings);

export const getTodosFilter = () =>
  createSelector([selectTodo, selectFiltersTodos, selectAllFiltersTodos], (state, filter, allfilter) => {
    const { search } = filter;
    const { complited } = allfilter;
    console.log("filter_todo", search);
    console.log("filter_todo", complited);
    return complited !== null
      ? state.todos
          .filter((t) => t.complited === complited)
          .filter((todo) =>
            search !== "" ? todo.title.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase()) : todo,
          )
      : state.todos.filter((todo) => todo.title.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase()));
  });
export const getcountTodo = () =>
  createSelector(selectTodo, (state) => {
    return state.todos.filter((t) => !t.complited);
  });
