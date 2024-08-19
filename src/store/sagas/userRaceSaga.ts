import { takeLatest, take, race, cancel, RaceEffect, CallEffect, PutEffect, TakeEffect } from 'redux-saga/effects';
import { Action } from '@reduxjs/toolkit';
import { CancelEffect } from '@redux-saga/core/effects';
import { fetchUser } from './userSaga';

export function* timeoutFetchUser(): Generator<
  RaceEffect<Promise<boolean> | TakeEffect> | CallEffect | PutEffect | CancelEffect | Generator,
  void,
  { isFetch?: boolean; isCancel?: Action }
> {
  const result = yield race({
    isFetch: new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), 2000);
    }),
    isCancel: take('userRace/setIsCancel'),
  });

  if (result.isCancel) {
    yield cancel();
  }

  if (result.isFetch) {
    yield fetchUser();
  }
}

export function* userRaceSaga(): Generator {
  yield takeLatest('userRace/setIsFetch', timeoutFetchUser);
}
