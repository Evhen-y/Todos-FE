import { takeLatest, put, call, select } from "redux-saga/effects";
import { AuthActions, AuthActionTypes } from ".";
import axios from "axios";
import jwt from "jsonwebtoken";
import { push } from "connected-react-router";
import { ROUTER_PATH } from "@router/";
function* loginSaga({ payload, cb }: ReturnType<typeof AuthActions.SIGN_IN.REQUEST>) {
  try {
    // const {token} = yield call (() => axios.post("http:a.com", payload))
    // jwt.verify(token, 'secret_key', (err, decoded) =>{
    //     const {user} = decoded
    // }).catch(err => err)

    const token = "jkljkljkl";
    const user = {
      id: 1,
      name: "ivan",
      lastName: "sidirov",
      email: "uhu@gmail.com",
      createAt: new Date(),
      isActive: true,
      avatar: null,
    };

    localStorage.getItem(token);
    yield put(AuthActions.SIGN_IN.SUCCESS({ user, token }));
    yield put(push(ROUTER_PATH.TODOS));
  } catch (err) {
    yield put(AuthActions.SIGN_IN.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* registrationSaga({ payload, cb }: ReturnType<typeof AuthActions.SIGN_UP.REQUEST>) {
  try {
    // yield call (() => axios.post("http:a.com", payload))

    yield put(AuthActions.SIGN_UP.SUCCESS({}));
  } catch (err) {
    yield put(AuthActions.SIGN_UP.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* activationSaga({ payload, cb }: ReturnType<typeof AuthActions.ACCOUNT_ACTIVATION.REQUEST>) {
  try {
    // yield call (() => axios.post("http:a.com", payload))
    yield put(AuthActions.SIGN_IN.REQUEST({ email: "", password: "" }));
    yield put(AuthActions.ACCOUNT_ACTIVATION.SUCCESS({}));
  } catch (err) {
    yield put(AuthActions.ACCOUNT_ACTIVATION.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* resetPasswordSaga({ payload, cb }: ReturnType<typeof AuthActions.RESET_PASSWORD.REQUEST>) {
  try {
    // yield call (() => axios.post("http:a.com", payload))

    yield put(AuthActions.RESET_PASSWORD.SUCCESS({}));
    yield put(AuthActions.SIGN_IN.REQUEST({ email: "", password: "" }));
  } catch (err) {
    yield put(AuthActions.RESET_PASSWORD.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* forgotPasswordSaga({ payload, cb }: ReturnType<typeof AuthActions.FORGOT_PASSWORD.REQUEST>) {
  try {
    // yield call (() => axios.post("http:a.com", payload))

    yield put(AuthActions.FORGOT_PASSWORD.SUCCESS({}));
  } catch (err) {
    yield put(AuthActions.FORGOT_PASSWORD.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* exitAuthSaga({ payload, cb }: ReturnType<typeof AuthActions.SIGN_OUT.REQUEST>) {
  try {
    // yield call (() => axios.post("http:a.com", payload))

    yield put(AuthActions.SIGN_OUT.SUCCESS({}));
    yield put(push(ROUTER_PATH.LOGIN));
  } catch (err) {
    yield put(AuthActions.SIGN_OUT.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

export const AuthWatcherSaga = function* () {
  yield takeLatest(AuthActionTypes.SIGN_IN.REQUEST, loginSaga);
  yield takeLatest(AuthActionTypes.SIGN_UP.REQUEST, registrationSaga);
  yield takeLatest(AuthActionTypes.RESET_PASSWORD.REQUEST, resetPasswordSaga);
  yield takeLatest(AuthActionTypes.FORGOT_PASSWORD.REQUEST, forgotPasswordSaga);
  yield takeLatest(AuthActionTypes.ACCOUNT_ACTIVATION.REQUEST, activationSaga);
  yield takeLatest(AuthActionTypes.SIGN_OUT.REQUEST, exitAuthSaga);
};
