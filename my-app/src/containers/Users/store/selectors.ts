import { createSelector } from "reselect";
import { IAppState } from "@shared/";

const selectUsers = (state: IAppState) => state.usersRedusers;
export const getUsers = () => createSelector(selectUsers, (state) => state.users);
export const getUser = () => createSelector(selectUsers, (state) => state.user);
