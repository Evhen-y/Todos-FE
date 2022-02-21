import {ITodosState, IUsersState} from '../../containers';


export interface IAppState {
  todosReduser: ITodosState;
  usersReduser: IUsersState;
  }