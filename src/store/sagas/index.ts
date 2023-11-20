import { all } from 'redux-saga/effects';
import { tokenSaga } from 'src/store/sagas/tokenSaga';
import { userSaga } from 'src/store/sagas/userSaga';
import { todosSaga } from 'src/store/sagas/todosSaga';

export function* sagas() {
  yield all([tokenSaga(), userSaga(), todosSaga()]);
}
