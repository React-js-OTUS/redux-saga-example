import { put, takeEvery } from 'redux-saga/effects';
import { URL } from 'src/constants';

export function* fetchTodosSaga() {
  try {
    const todos = (yield fetch(`${URL}todos`).then((res) => res.json())) as unknown[];
    yield put({ type: 'todos/fetchTodosSuccess', payload: todos });
  } catch (error) {
    yield put({ type: 'todos/fetchTodosFailure', payload: error });
  }
}

export function* todosSaga() {
  yield takeEvery('todos/fetchTodos', fetchTodosSaga);
}
