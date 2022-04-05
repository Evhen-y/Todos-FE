import { Reducer as IReducer } from "redux";
import { IAuthState, AuthActionTypes } from "@containers/";

export const initialAuthState: IAuthState = {
  error: null,
  loading: false,
  authUser: null,
  isAuthentificate: false,
  token: null,
};
export const AuthReduser: IReducer<IAuthState> = (state: IAuthState = initialAuthState, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN.REQUEST:
    case AuthActionTypes.SIGN_UP.REQUEST:
    case AuthActionTypes.RESET_PASSWORD.REQUEST:
    case AuthActionTypes.FORGOT_PASSWORD.REQUEST:
    case AuthActionTypes.ACCOUNT_ACTIVATION.REQUEST:
    case AuthActionTypes.SIGN_OUT.REQUEST:
      return { ...state, loading: true };

    case AuthActionTypes.SIGN_IN.SUCCESS:
    case AuthActionTypes.RESET_PASSWORD.SUCCESS:
    case AuthActionTypes.ACCOUNT_ACTIVATION.SUCCESS:
      const { user, token } = action.payload;
      return { ...state, loading: false, authUser: user, token: token, isAuthentificate: true };
    case AuthActionTypes.SIGN_UP.SUCCESS:
    case AuthActionTypes.FORGOT_PASSWORD.SUCCESS:
      return { ...state, loading: false };

    case AuthActionTypes.SIGN_OUT.SUCCESS:
      return initialAuthState;

    case AuthActionTypes.SIGN_IN.FAILURE:
    case AuthActionTypes.SIGN_UP.FAILURE:
    case AuthActionTypes.RESET_PASSWORD.FAILURE:
    case AuthActionTypes.FORGOT_PASSWORD.FAILURE:
    case AuthActionTypes.ACCOUNT_ACTIVATION.FAILURE:
    case AuthActionTypes.SIGN_OUT.FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
