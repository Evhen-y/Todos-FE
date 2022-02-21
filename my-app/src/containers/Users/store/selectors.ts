import { createSelector } from "reselect";
import { IAppState } from "@shared/";

const selectUsers = (state: IAppState) => state.usersReduser;
export const getUsers = () => createSelector(selectUsers, (state) => state.users);
export const getUser = () => createSelector(selectUsers, (state) => state.user);
