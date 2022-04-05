import { createSelector } from "reselect";
import { IAppState } from "@shared/";

const selectAuth = (state: IAppState) => state.AuthReduser;

export const getUserAuth = () => createSelector(selectAuth, (state) => state.authUser);
export const getIsAuthentificate = () => createSelector(selectAuth, (state) => state.isAuthentificate);
