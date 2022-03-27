import { createSelector } from "reselect";
import { IAppState } from "@shared/";

const selectUsers = (state: IAppState) => state.usersReduser;
const selectUserFilter = (state: IAppState) => state.usersReduser.userFilterSettings;
export const getUsers = () => createSelector(selectUsers, (state) => state.users);
export const getUser = () => createSelector(selectUsers, (state) => state.user);
export const getUserFilterSettings = () => createSelector(selectUsers, (state) => state.userFilterSettings);

export const getUsersFilter = () =>
  createSelector([selectUsers, selectUserFilter], (state, filter) => {
    const { search } = filter;
    console.log("filter_user", filter);
    return state.users.filter((user) => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  });
