import { put, select, takeLatest } from 'redux-saga/effects';
import { countActions, countSelectors } from 'src/store/count';
import { URL } from 'src/constants';
import { userActions } from 'src/store/user';

export function* fetchUser(): Generator {
  const count = (yield select(countSelectors.get)) as number;
  const response = yield fetch(`${URL}users/${count}`).then((res) => res.json());
  yield put(userActions.set(response));
}

export function* userSaga() {
  yield takeLatest(countActions.set().type, fetchUser);
  yield takeLatest(countActions.increase().type, fetchUser);
  yield takeLatest(countActions.decrease().type, fetchUser);
}
