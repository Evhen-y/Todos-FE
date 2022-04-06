import { Reducer as IReducer } from "redux";
import { TodosActionsTypes } from "@containers/";
import { ITodo, ITodosState } from "./interface";
import { EOrder } from "./interface";

const initionState: ITodosState = {
  error: null,
  loading: false,
  todos: [],
  todo: null,
  filterSettings: {
    complited: null,
  },
  filterSearchSettings: {
    search: "",
    order: EOrder.ASC,
    sortBy: "createAt",
  },
};
export const todosReduser: IReducer<ITodosState> = (state: ITodosState = initionState, action) => {
  switch (action.type) {
    case TodosActionsTypes.FETCH_TODOS.REQUEST:
    case TodosActionsTypes.FETCH_TODO.REQUEST:
    case TodosActionsTypes.ADD_TODO.REQUEST:
    case TodosActionsTypes.EDIT_TODO.REQUEST:
    case TodosActionsTypes.REMOVE_TODO.REQUEST:
      return { ...state, loading: true };

    case TodosActionsTypes.FETCH_TODOS.SUCCESS:
      return { ...state, loading: false, todos: action.payload };

    case TodosActionsTypes.FETCH_TODO.SUCCESS:
      return { ...state, loading: false, todo: action.payload };

    case TodosActionsTypes.ADD_TODO.SUCCESS:
      return { ...state, loading: false, todos: [...state.todos].concat(action.payload) };

    case TodosActionsTypes.EDIT_TODO.SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos].map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
      };

    case TodosActionsTypes.REMOVE_TODO.SUCCESS:
      return { ...state, loading: false, todos: [...state.todos].filter((todo) => todo.id !== action.payload) };

    case TodosActionsTypes.FETCH_TODOS.FAILURE:
    case TodosActionsTypes.FETCH_TODO.FAILURE:
    case TodosActionsTypes.ADD_TODO.FAILURE:
    case TodosActionsTypes.EDIT_TODO.FAILURE:
    case TodosActionsTypes.REMOVE_TODO.FAILURE:
      return { ...state, loading: false, error: action.payload };

    case TodosActionsTypes.APPLY_FILTER_TODOS.REQUEST:
      return {...state, filterSettings: {...state.filterSettings, ...action.payload}}

    case TodosActionsTypes.TODO_FILTER.REQUEST:
      return { ...state, filterSearchSettings: { ...state.filterSearchSettings, ...action.payload } };
    default:
      return state;
  }
};
