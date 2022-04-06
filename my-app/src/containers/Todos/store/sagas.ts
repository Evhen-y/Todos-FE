import { takeLatest, put, call, select } from "redux-saga/effects";
import { getTodosFilter, todosActions, TodosActionsTypes } from ".";

function* fetchTodosSaga({ payload, cb }: ReturnType<typeof todosActions.FETCH_TODOS.REQUEST>) {
  try {
    //@ts-ignore
    // const {search} = yield select(state => state.todosReduser.filterSettings)
    const todos = [
      {
        id: 1,
        title: "Todods 001",
        createAt: new Date(),
        complited: false,
      },
      {
        id: 2,
        title: "Todods 002",
        createAt: new Date(),
        complited: false,
      },
    ];

    yield put(todosActions.FETCH_TODOS.SUCCESS(todos));
  } catch (err) {
    yield put(todosActions.FETCH_TODOS.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}
function* fetchTodoSaga({ payload, cb }: ReturnType<typeof todosActions.FETCH_TODO.REQUEST>) {
  try {
    const todo = [
      {
        id: 3,
        text: "Todods 003",
        createAt: new Date(),
        completed: null,
      },
    ];

    yield put(todosActions.FETCH_TODO.SUCCESS(todo));
  } catch (err) {
    yield put(todosActions.FETCH_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* addTodoSaga({ payload, cb }: ReturnType<typeof todosActions.ADD_TODO.REQUEST>) {
  try {
    yield put(todosActions.ADD_TODO.SUCCESS(payload));
  } catch (err) {
    yield put(todosActions.ADD_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* editTodoSaga({ payload, cb }: ReturnType<typeof todosActions.EDIT_TODO.REQUEST>) {
  try {
    yield put(todosActions.EDIT_TODO.SUCCESS(payload));
  } catch (err) {
    yield put(todosActions.ADD_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* removeTodoSaga({ payload, cb }: ReturnType<typeof todosActions.REMOVE_TODO.REQUEST>) {
  try {
    yield put(todosActions.REMOVE_TODO.SUCCESS(payload));
  } catch (err) {
    yield put(todosActions.REMOVE_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

// function* filterTodosSaga({ payload, cb }: ReturnType<any>) {
//   cb()
// }

export const todosWatcherSaga = function* () {
  yield takeLatest(TodosActionsTypes.FETCH_TODOS.REQUEST, fetchTodosSaga);
  yield takeLatest(TodosActionsTypes.FETCH_TODO.REQUEST, fetchTodoSaga);
  yield takeLatest(TodosActionsTypes.ADD_TODO.REQUEST, addTodoSaga);
  yield takeLatest(TodosActionsTypes.EDIT_TODO.REQUEST, editTodoSaga);
  yield takeLatest(TodosActionsTypes.REMOVE_TODO.REQUEST, removeTodoSaga);
  // yield takeLatest(TodosActionsTypes.TODO_FILTER.REQUEST, filterTodosSaga);
};
