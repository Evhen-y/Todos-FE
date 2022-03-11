import { applyMiddleware, createStore } from "redux";
import rootReduser from "./rootReduser";
import rootSaga from "./rootSaga";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { History, createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const composer = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

export const history = createBrowserHistory();

export const configureStore = (history: History) => {
  const store = createStore(
    rootReduser(history),
    undefined,
    composer(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
  );

  sagaMiddleware.run(rootSaga);

  return { store };
};
