import React, { CSSProperties, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import type {
  InitialValues,
  Product,
  ProductCardHandlers,
  onChangeArgs,
} from '../interfaces';

import s from '../styles/styles.module.css';

interface ProductContext {
  count: number;
  handleCount: (factor: number) => void;
  product: Product;
  maxCount?: number;
}

export const ProductContext = createContext({} as ProductContext);
const { Provider } = ProductContext;

export interface ProductCardProps {
  children: (args: ProductCardHandlers) => JSX.Element;
  product: Product;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const countHandler = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        ...countHandler,
        product,
        maxCount: initialValues?.maxCount,
      }}
    >
      <div className={`${s.productCard} ${className}`} style={style}>
        {children({
          ...countHandler,
          product,
        })}
      </div>
    </Provider>
  );
};
