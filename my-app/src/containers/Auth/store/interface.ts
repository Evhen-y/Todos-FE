import { IUser } from "@containers/";

export interface IAuthState {
  error: null | string;
  isAuthentificate: boolean;
  authUser: null | Partial<IUser> | number;
  token: null | string;
  loading: boolean;
}
