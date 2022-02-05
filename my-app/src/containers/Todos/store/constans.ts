import {createActionsTypes} from "../../../utils"
export const ACTIONS_TYPES = ['FETCH_TODOS', 'FETCH_TODO', 'EDIT_TODO', 'DELETE']


export const todosActionsTypes = createActionsTypes(ACTIONS_TYPES)