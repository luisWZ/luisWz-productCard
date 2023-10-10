import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import noImg from '../assets/no-image.jpg';
import s from '../styles/styles.module.css';

export interface ProductImageProps {
  image?: string;
  className?: string;
  style?: CSSProperties;
}

export const Image = ({ image, className, style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  const imageToShow = image ?? product.image ?? noImg;
  const alt = product?.description && (image || product.image) ? product.description : 'Product';

  return (
    <img className={`${s.productImg} ${className}`} style={style} src={imageToShow} alt={alt} />
  );
};
