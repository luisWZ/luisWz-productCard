# Product Card Module

Module testing using a react component

## Examples

```js
import { ProductCard } from 'luiswz-productcard';
```

```tsx
<ProductCard
  initialValues={{ count: 4, maxCount: 10 }}
  product={product}
>
  {({ reset, handleCount, isMaxCountReached, count, maxCount }) => (
    <>
      <ProductCard.Image />
      <ProductCard.Description />
      <ProductCard.Buttons />
    </>
  )}
</ProductCard>
```