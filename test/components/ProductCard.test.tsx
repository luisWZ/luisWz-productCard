import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { products } from '../../example/data/products';

describe('ProductCard', () => {
  it('should render', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[0]}>
        {() => (
          <>
            <ProductCard.Image />
            <ProductCard.Description />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should increase the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[0]}>
        {({ handleCount, count }) => (
          <>
            <h1>{count}</h1>
            <button onClick={() => handleCount(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();

    renderer.act(() => {
      (tree as any).children[1].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[0].children[0]).toBe('1');
  });
});
