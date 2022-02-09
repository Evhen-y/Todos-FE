import { createActionsTypes } from "../../../utils";
export const ACTIONS_TYPES = ["FETCH_TODOS", "FETCH_TODO", "ADD_TODO", "EDIT_TODO", "REMOVE_TODO"];

export const TodosActionsTypes = createActionsTypes(ACTIONS_TYPES);
