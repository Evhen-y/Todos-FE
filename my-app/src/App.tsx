import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TodoContainers, todosActions, usersActions } from "@containers/";
import { UserContainer } from "./containers/Users/container";
import { publicRouter, privateRouter, routerAssessor } from "@router/";
import "./styles/index.scss";
import { Route, Switch } from "react-router";
import { Main } from "@shared/";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todosActions.FETCH_TODOS.REQUEST({}));
    dispatch(usersActions.FETCH_USERS.REQUEST({}));
    //  dispatch(todosActions.TODO_FILTER.REQUEST({}));
  }, []);
  return (
    <Switch>
      {publicRouter.map((route) => routerAssessor(null, route))}

      {privateRouter("ADMIN").map((route) => routerAssessor(null, route))}
      {/* <Main>
      {privatRouter("ADMIN").map((route) => routerAssessor(null, route))}
    </Main> */}
    </Switch>
  );
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(todosActions.FETCH_TODOS.REQUEST({}));
  //   dispatch(usersActions.FETCH_USERS.REQUEST({}));
  //   // dispatch(todosActions.TODO_FILTER.REQUEST({}));
  // }, []);
  // return (
  //   <div>
  //     <TodoContainers />
  //     <UserContainer />
  //   </div>
  // );
};
export default App;
