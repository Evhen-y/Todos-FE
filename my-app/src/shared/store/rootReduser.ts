import {combineReducers, CombinedState, AnyAction} from "redux"
import {connectRouter, RouterState} from "connected-react-router"
import {History, createBrowserHistory} from "history"
import {ITodosState, IUsersState, todosReduser, usersReduser } from "@containers/"
import {IAppState} from "../interface"

export const history = createBrowserHistory()

type TReduser = CombinedState<IAppState>

type TRootReduser = |CombinedState <{
    todosReduser: ITodosState;
    usersReduser: IUsersState;
    
    router : RouterState<unknown>;
}>| undefined

export default (history: History) => {
    const rootReduser = combineReducers({
        todosReduser,
        usersReduser,

        router: connectRouter(history),
    })
    return (state: TReduser | undefined, action: AnyAction) => {
        return rootReduser (state as TRootReduser, action)
    }
}