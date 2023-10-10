import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../dist';
import { products } from './data/products';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {products.map(product => (
        <ProductCard
          key={product.description}
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
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
