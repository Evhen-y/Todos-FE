import {createActionsTypes} from "@utils/"
export const ACTIONS_TYPES_AUTH = [ "SIGN_IN",
"SIGN_UP",
"RESET_PASSWORD",
"FORGOT_PASSWORD",
"ACCOUNT_ACTIVATION",
"SIGN_OUT"]

export const AuthActionTypes = createActionsTypes(ACTIONS_TYPES_AUTH)