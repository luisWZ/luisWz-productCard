import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductCardDescription } from '../../src/components';
import { products } from '../../example/data/products';

const description = 'product description';

describe('ProductDescription', () => {
  it('should render with description string', () => {
    const wrapper = renderer.create(
      <ProductCardDescription description={description} className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render description from context', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[0]}>{() => <ProductCard.Description />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
