import { takeLatest, put, call } from "redux-saga/effects";
import { usersActions, UsersActionsTypes } from ".";

function* fetchUsersSaga({ payload, cb }: ReturnType<any>) {
  try {
    const users = [
      {
        id: 1,
        name: "Zhenya",
        lastName:"Ilushchenko",
        avatar: null,
        email: "qq@gmail.com",
        createAt: new Date(),
        isActive: false,
      },
      {
        id: 2,
        name: "olya",
        lastName:"Girl",
        avatar: null,
        email: "qqq@gmail.com",
        createAt: new Date(),
        isActive: false,
      },
    ];

    yield put(usersActions.FETCH_USERS.SUCCESS(users));
  } catch (err) {
    yield put(usersActions.FETCH_USERS.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}
function* fetchUserSaga({ payload, cb }: ReturnType<any>) {
  try {
    const user = [
      {
        id: 3,
        name: "Gena",
        lastName:"Friend",
        avatar: null,
        email: "qqqq@gmail.com",
        createAt: new Date(),
        isActive: false,
      },
    ];

    yield put(usersActions.FETCH_USER.SUCCESS(user));
  } catch (err) {
    yield put(usersActions.FETCH_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* addUserSaga({ payload, cb }: ReturnType<any>) {
  try {
    const newUser = [
      {
        id: 4,
        name: "Roma",
        lastName:"Friend2",
        avatar: null,
        email: "q1qqq@gmail.com",
        createAt: new Date(),
        isActive: false,
      },
    ];
    yield put(usersActions.ADD_USER.SUCCESS(newUser));
  } catch (err) {
    yield put(usersActions.ADD_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* editUserSaga({ payload, cb }: ReturnType<any>) {
  try {
    const updateUser = [
      {
        id: 4,
        name: "Roman",
        lastName:"Friend2",
        avatar: null,
        email: "q1qqq@gmail.com",
        createAt: new Date(),
        isActive: false,
      },
    ];

    yield put(usersActions.EDIT_USER.SUCCESS(updateUser));
  } catch (err) {
    yield put(usersActions.ADD_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* removeUserSaga({ payload, cb }: ReturnType<any>) {
  try {
    yield put(usersActions.REMOVE_USER.SUCCESS(payload));
  } catch (err) {
    yield put(usersActions.REMOVE_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

export const usersWatcherSaga = function* () {
  yield takeLatest(UsersActionsTypes.FETCH_USERS.REQUEST, fetchUsersSaga);
  yield takeLatest(UsersActionsTypes.FETCH_USER.REQUEST, fetchUserSaga);
  yield takeLatest(UsersActionsTypes.ADD_USER.REQUEST, addUserSaga);
  yield takeLatest(UsersActionsTypes.EDIT_USER.REQUEST, editUserSaga);
  yield takeLatest(UsersActionsTypes.REMOVE_USER.REQUEST, removeUserSaga);
};
