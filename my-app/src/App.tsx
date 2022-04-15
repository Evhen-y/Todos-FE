import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TodoContainers, todosActions, usersActions } from "@containers/";
import { UserContainer } from "./containers/Users/container";
import { publicRouter, privateRouter, routerAssessor, ROUTER_PATH } from "./router";
import "./styles/index.scss";
import { Redirect, Switch } from "react-router";
import { Main } from "./shared";

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(todosActions.FETCH_TODOS.REQUEST({}));
  //   dispatch(usersActions.FETCH_USERS.REQUEST({}));
  // }, []);
  return (
    <Switch>
      {publicRouter.map((route) => routerAssessor(null, route))}
      <Main>{privateRouter("ADMIN").map((route) => routerAssessor(null, route))}</Main>
      <Redirect to={ROUTER_PATH.LOGIN} />
    </Switch>
  );
};
export default App;
