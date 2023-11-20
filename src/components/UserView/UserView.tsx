import React from 'react';
import cn from 'clsx';
import { useSelector } from 'react-redux';
import { AppState } from 'src/store';
import s from './UserView.sass';

export type UserViewProps = {
  className?: string;
};

export const UserView = ({ className }: UserViewProps) => {
  const user = useSelector((state: AppState) => state.user);

  console.log('render: UserView');

  return (
    <div className={cn(s.root, className)}>
      <div>UserView</div>
      <div>user</div>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
};
