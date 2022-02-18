import {ITodosState, IUsersState} from '../../containers';


export interface IAppState {
    todosRedusers: ITodosState;
    usersRedusers: IUsersState;
  }