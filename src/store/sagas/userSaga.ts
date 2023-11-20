import { call, put, select, takeLatest } from 'redux-saga/effects';
import { countActions, countSelectors } from 'src/store/count';
import { URL } from 'src/constants';
import { User, userActions } from 'src/store/user';

export function* fetchUser(): Generator {
  const count = (yield select(countSelectors.get)) as number;
  const response = (yield call(fetch, `${URL}users/${count}`)) as Response;
  const user = (yield call([response, 'json'])) as User;
  yield put(userActions.set(user));
}

export function* userSaga() {
  yield takeLatest(countActions.set().type, fetchUser);
  yield takeLatest(countActions.increase().type, fetchUser);
  yield takeLatest(countActions.decrease().type, fetchUser);
}
