import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { count } from 'src/store/count';
import { token } from 'src/store/token';
import { todos } from 'src/store/todos';
import { user } from 'src/store/user';
import { sagas } from 'src/store/sagas';
import { items } from 'src/store/items';
import { userRace } from 'src/store/userRace';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    items,
    count,
    token,
    todos,
    user,
    userRace,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
