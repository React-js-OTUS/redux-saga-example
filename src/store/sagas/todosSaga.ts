import { put, takeEvery, call } from 'redux-saga/effects';
import { URL } from 'src/constants';

export function* fetchTodosSaga() {
  try {
    const response: Response = yield call(fetch, `${URL}todos`);
    const todos: unknown[] = yield call([response, 'json']);
    yield put({ type: 'todos/fetchTodosSuccess', payload: todos });
  } catch (error) {
    yield put({ type: 'todos/fetchTodosFailure', payload: error });
  }
}

export function* todosSaga() {
  yield takeEvery('todos/fetchTodos', fetchTodosSaga);
}
