import { ProductCard as ProductCardHOC, ProductCardProps as ProductProps } from './ProductCard';

import {
  Description as ProductCardDescription,
  ProductDescriptionProps,
} from './ProductDescription';
import { Image as ProductCardImage, ProductImageProps } from './ProductImage';
import { ProductButtonsProps, Buttons as ProductCardButtons } from './ProductButtons';

export { Description as ProductCardDescription } from './ProductDescription';
export { Image as ProductCardImage } from './ProductImage';
export { Buttons as ProductCardButtons } from './ProductButtons';

export interface ProductCardProps {
  (props: ProductProps): JSX.Element;
  Description: (props: ProductDescriptionProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
}

export const ProductCard: ProductCardProps = Object.assign(ProductCardHOC, {
  Description: ProductCardDescription,
  Image: ProductCardImage,
  Buttons: ProductCardButtons,
});
