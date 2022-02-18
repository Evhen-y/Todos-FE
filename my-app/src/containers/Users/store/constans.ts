import { createActionsTypes } from "../../../utils";
export const ACTIONS_TYPES_USRS = ["FETCH_USERS", "FETCH_USER", "ADD_USER", "EDIT_USER", "REMOVE_USER"];

export const UsersActionsTypes = createActionsTypes(ACTIONS_TYPES_USRS);
