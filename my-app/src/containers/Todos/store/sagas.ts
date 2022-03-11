import { takeLatest, put, call, select } from "redux-saga/effects";
import { getTodosFilter, todosActions, TodosActionsTypes } from ".";

function* fetchTodosSaga({ payload, cb }: ReturnType<any>) {
  try {
    //@ts-ignore
    // const {search} = yield select(state => state.todosReduser.filterSettings)
    const todos = [
      {
        id: 1,
        text: "Todods 001",
        createAt: new Date(),
        completed: false,
      },
      {
        id: 2,
        text: "Todods 002",
        createAt: new Date(),
        completed: false,
      },
    ];

    yield put(todosActions.FETCH_TODOS.SUCCESS(todos));
  } catch (err) {
    yield put(todosActions.FETCH_TODOS.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}
function* fetchTodoSaga({ payload, cb }: ReturnType<any>) {
  try {
    const todo = [
      {
        id: 3,
        text: "Todods 003",
        createAt: new Date(),
        completed: false,
      },
    ];

    yield put(todosActions.FETCH_TODO.SUCCESS(todo));
  } catch (err) {
    yield put(todosActions.FETCH_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* addTodoSaga({ payload, cb }: ReturnType<any>) {
  try {
    const newTodo = [
      {
        id: 4,
        text: "Todods 004",
        createAt: new Date(),
        completed: false,
      },
    ];
    yield put(todosActions.ADD_TODO.SUCCESS(newTodo));
  } catch (err) {
    yield put(todosActions.ADD_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* editTodoSaga({ payload, cb }: ReturnType<any>) {
  try {
    const updateTodo = [
      {
        id: 44,
        text: "Todods 0044",
        createAt: new Date(),
        completed: false,
      },
    ];

    yield put(todosActions.EDIT_TODO.SUCCESS(updateTodo));
  } catch (err) {
    yield put(todosActions.ADD_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* removeTodoSaga({ payload, cb }: ReturnType<any>) {
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
