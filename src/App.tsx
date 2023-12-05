import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import { TokenGenerator } from 'src/components/TokenGenerator';
import { TokenView } from 'src/components/TokenView';
import { TodosFetch } from 'src/components/TodosFetch';
import { TodosView } from 'src/components/TodosView';
import { UserView } from 'src/components/UserView';
import { CountEditorUseDispatch } from 'src/components/CountEditorUseDispatch';
import { CountListenerUseSelector } from 'src/components/CountListenerUseSelector';
import s from './App.sass';
import { RaceExample } from './components/RaceExample';

function App() {
  return (
    <div className={s.root}>
      <h1>Пример redux приложения</h1>
      <Provider store={store}>
        <h3>count</h3>
        <CountEditorUseDispatch />
        <CountListenerUseSelector />
        <h3>token</h3>
        <TokenGenerator />
        <TokenView />
        <h3>todos</h3>
        <TodosFetch />
        <TodosView />
        <h3>user</h3>
        <UserView />
        <h3>Timeout user</h3>
        <RaceExample />
      </Provider>
    </div>
  );
}

export default App;
