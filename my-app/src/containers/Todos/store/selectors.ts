import { createSelector } from "reselect";
import { IAppState } from "@shared/";

const selectTodo = (state: IAppState) => state.todosReduser;
const selectFiltersTodos = (state: IAppState) => state.todosReduser.filterSearchSettings;

export const getTodos = () => createSelector(selectTodo, (state) => state.todos);
export const getTodo = () => createSelector(selectTodo, (state) => state.todo);
export const getFilterSettings = () => createSelector(selectTodo, (state) => state.filterSearchSettings);

export const getAllFilterSettings = () => createSelector(selectTodo, ({todos, filterSettings:{complited} }) =>{
  return complited === null? todos.filter((t)=> t.complited===complited): todos })


  export const getTodosFilter = () =>
  createSelector([selectTodo, selectFiltersTodos], (state, filter) => {
    const { search } = filter;
    console.log("filter_todo", filter);
    return state.todos.filter((todo) => todo.title.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase()));
    // return state.todos.filter((todo) => Object.values(todo.text)
    // .filter((value) => !!value).some((value) => value.toLowerCase().trim().includes(search)));
  });
