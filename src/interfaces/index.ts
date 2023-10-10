export interface Product {
  id: number;
  description: string;
  image?: string;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface Cart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  handleCount: (factor: number) => void;
  reset: () => void;
}
