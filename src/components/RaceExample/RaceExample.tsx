import React from 'react';
import { useDispatch } from 'react-redux';

import { userRaceActions } from 'src/store/userRace';

export const RaceExample = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(userRaceActions.setIsFetch(true))}>Запросить user через 2 секунды...</button>
      <button onClick={() => dispatch(userRaceActions.setIsCancel(true))}>Отменить запрос</button>
    </div>
  );
};
