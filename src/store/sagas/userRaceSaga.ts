import { takeLatest, take, race, cancel } from 'redux-saga/effects';
import { fetchUser } from './userSaga';

export function* timeoutFetchUser(): Generator {
  const { isFetch, isCancel }: any = yield race({
    isFetch: new Promise((resolve) => {
      setTimeout(() => resolve(true), 2000);
    }), // или fetchUser
    isCancel: take('userRace/setIsCancel'),
  });

  console.log('isFetch: ', isFetch);
  console.log('isCancel: ', isCancel);

  if (isCancel) {
    yield cancel();
  }

  yield fetchUser();
}

export function* userRaceSaga() {
  yield takeLatest('userRace/setIsFetch', timeoutFetchUser);
}
