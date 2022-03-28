import { ITodosState, IUsersState, IAuthState } from "../../containers";

export interface IAppState {
  todosReduser: ITodosState;
  usersReduser: IUsersState;
  AuthReduser: IAuthState;
}
