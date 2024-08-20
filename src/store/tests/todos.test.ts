import { testSaga } from 'redux-saga-test-plan';
import { tokenActions, tokenSelectors } from '../token';
import { setToken, tokenSaga } from '../sagas/tokenSaga';

describe('setToken Saga', () => {
  it('should set the token in localStorage', () => {
    const mockToken = 'mockedToken';

    testSaga(setToken)
      .next()
      .select(tokenSelectors.get)
      .next(mockToken)
      .call([localStorage, 'setItem'], 'token', mockToken)
      .next()
      .isDone();
  });

  it('should set an empty string if no token is found', () => {
    const mockToken: null = null;

    testSaga(setToken)
      .next()
      .select(tokenSelectors.get)
      .next(mockToken)
      .call([localStorage, 'setItem'], 'token', '')
      .next()
      .isDone();
  });

  it('should take every tokenActions.gen and call setToken', () => {
    testSaga(tokenSaga).next().takeEvery(tokenActions.gen().type, setToken).next().isDone();
  });
});
