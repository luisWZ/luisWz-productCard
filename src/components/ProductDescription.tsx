import React, { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';

import s from '../styles/styles.module.css';

export interface ProductDescriptionProps {
  description?: string;
  className?: string;
  style?: CSSProperties;
}

export const Description = ({ description, className, style }: ProductDescriptionProps) => {
  const { product } = useContext(ProductContext);
  const descriptionToShow = description ? description : product.description;

  return (
    <span className={`${s.productDescription} ${className}`} style={style}>
      {descriptionToShow}
    </span>
  );
};
