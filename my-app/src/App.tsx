import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import { TodoContainers, todosActions } from "@containers/";



const App = () => {
    const dispatch = useDispatch()
useEffect(()=>{
    dispatch(todosActions.FETCH_TODOS.REQUEST({}))
}, [])
return<TodoContainers />;

}
export default App;
