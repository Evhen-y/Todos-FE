import { all, fork } from "redux-saga/effects";
import { todosWatcherSaga, usersWatcherSaga, AuthWatcherSaga } from "@containers/";

const allSagas = [todosWatcherSaga, usersWatcherSaga, AuthWatcherSaga];

export default function* rootSaga() {
  yield all(allSagas.map(fork));
}
