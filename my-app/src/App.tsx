import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TodoContainers, todosActions, usersActions } from "@containers/";
import { UserContainer } from "./containers/Users/container/UserContainer";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todosActions.FETCH_TODOS.REQUEST({}));
    dispatch(usersActions.FETCH_USERS.REQUEST({}));
    // dispatch(todosActions.TODO_FILTER.REQUEST({}));
  }, []);
  return (
    <div>
      <TodoContainers />
      <UserContainer />
    </div>
  );
};
export default App;
