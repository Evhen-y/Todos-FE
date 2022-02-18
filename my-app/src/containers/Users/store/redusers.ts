import { Reducer as IReducer } from "redux";
import { UsersActionsTypes } from "@containers/";
import { IUser, IUsersState } from "./interface";

const initionState: IUsersState = {
  error: null,
  loading: false,
  users: [],
  user: null,
};
export const usersReduser: IReducer<IUsersState> = (state: IUsersState = initionState, action) => {
  switch (action.type) {
    case UsersActionsTypes.FETCH_USERS.REQUEST:
    case UsersActionsTypes.FETCH_USER.REQUEST:
    case UsersActionsTypes.ADD_USER.REQUEST:
    case UsersActionsTypes.EDIT_USER.REQUEST:
    case UsersActionsTypes.REMOVE_USER.REQUEST:
      return { ...state, loading: true };

    case UsersActionsTypes.FETCH_USERS.SUCCESS:
      return { ...state, loading: false, users: action.payload };

    case UsersActionsTypes.FETCH_USER.SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case UsersActionsTypes.ADD_USER.SUCCESS:
      return { ...state, loading: false, users: [...state.users].concat(action.payload) };

    case UsersActionsTypes.EDIT_USER.SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users].map((user) => (user.id === action.payload ? action.payload : user)),
      };

    case UsersActionsTypes.REMOVE_USER.SUCCESS:
      return { ...state, loading: false, users: [...state.users].filter((user) => user.id !== action.payload) };

    case UsersActionsTypes.FETCH_USERS.FAILURE:
    case UsersActionsTypes.FETCH_USER.FAILURE:
    case UsersActionsTypes.ADD_USER.FAILURE:
    case UsersActionsTypes.EDIT_USER.FAILURE:
    case UsersActionsTypes.REMOVE_USER.FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
