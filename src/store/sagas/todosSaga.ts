import { put, takeEvery, call } from 'redux-saga/effects';
import { URL } from 'src/constants';

export function* fetchTodosSaga() {
  const abortController = new AbortController();

  try {
    const response: Response = yield call(fetch, `${URL}todos`, {
      signal: abortController.signal,
    });
    const todos: unknown[] = yield call([response, 'json']);
    yield put({ type: 'todos/fetchTodosSuccess', payload: todos });
  } catch (error) {
    if (error.name !== 'AbortError') {
      yield put({ type: 'todos/fetchTodosFailure', payload: error });
    }
  } finally {
    abortController.abort();
  }
}

export function* todosSaga() {
  yield takeEvery('todos/fetchTodos', fetchTodosSaga);
}
