import { createSelector } from "reselect";
import {IAppState} from "@shared/"



const selectTodo = (state: IAppState) => state.todosReduser;
const selectFiltersTodos = (state: IAppState) => state.todosReduser.filterSettings

export const getTodos = () => createSelector(selectTodo, (state) => state.todos);
export const getTodo = () => createSelector(selectTodo, (state) => state.todo);
export const getFilterSettings = () => createSelector(selectTodo, (state)=> state.filterSettings)

export const getTodosFilter = () =>  createSelector([selectTodo, selectFiltersTodos], (state, filter)=>{
    const {search} = filter
    console.log('filter', filter)
    console.log('search', search)
    return state.todos.filter(todo => todo.text.includes(search))
})
    


    // state.todos.filter((todo)=> todo.text.includes(state.filterSettings.search))})


