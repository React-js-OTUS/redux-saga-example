import React from 'react';
import cn from 'clsx';
import { connect } from 'react-redux';
import { tokenActions } from 'src/store/token';
import { AppDispatch } from 'src/store';
import s from './TokenGenerator.sass';

export type TokenGeneratorProps = {
  className?: string;
  gen: () => void;
  same: () => void;
};

export const TokenGeneratorOrigin = ({ className, gen }: TokenGeneratorProps) => {
  console.log('render: TokenGeneratorOrigin');

  return (
    <div className={cn(s.root, className)}>
      <div>TokenGenerator</div>
      <button type="button" onClick={gen}>
        Генерировать фэйковый токен
      </button>
    </div>
  );
};

export const TokenGenerator = connect(null, (dispatch: AppDispatch) => ({
  gen: () => dispatch(tokenActions.gen()),
  same: () => dispatch(tokenActions.same()),
}))(TokenGeneratorOrigin);
