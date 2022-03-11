import { all, fork } from "redux-saga/effects";
import { todosWatcherSaga, usersWatcherSaga } from "@containers/";

const allSagas = [todosWatcherSaga, usersWatcherSaga];

export default function* rootSaga() {
  yield all(allSagas.map(fork));
}
