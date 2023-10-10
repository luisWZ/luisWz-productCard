import React, { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import s from '../styles/styles.module.css';

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export const Buttons = ({ className, style }: ProductButtonsProps) => {
  const { count, handleCount, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => !!maxCount && count >= maxCount, [count, maxCount]);

  return (
    <div className={`${s.buttonsContainer} ${className}`} style={style}>
      <button disabled={count === 0} className={s.buttonMinus} onClick={() => handleCount(-1)}>
        -
      </button>
      <div className={s.countLabel}>{count}</div>
      <button disabled={isMaxReached()} className={s.buttonAdd} onClick={() => handleCount(1)}>
        +
      </button>
    </div>
  );
};
