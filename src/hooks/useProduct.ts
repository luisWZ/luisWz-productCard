import { useEffect, useState } from 'react';
import type { InitialValues, onChangeArgs } from '../interfaces';
import { Product } from '../interfaces/index';
import { useIsMounted } from './useIsMounted';

interface UseProduct {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: UseProduct) => {
  const [count, setCount] = useState<number>(initialValues?.count ?? value);
  const { isMounted } = useIsMounted();

  // console.log(count);

  const handleCount = (factor: number) => {
    let newCount = Math.max(count + factor, 0);
    if (initialValues?.maxCount) {
      newCount = Math.min(newCount, initialValues?.maxCount);
    }

    setCount(newCount);
    onChange && onChange({ product, count: newCount });
  };

  const reset = () => setCount(initialValues?.count ?? 0);

  useEffect(() => {
    if (!isMounted) return;
    setCount(value);
  }, [value]);

  return {
    count,
    handleCount,
    reset,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.maxCount && count >= initialValues?.maxCount,
  };
};
