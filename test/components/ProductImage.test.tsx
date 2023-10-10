import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductCardImage } from '../../src/components';
import { products } from '../../example/data/products';

const image = 'testImage.png';

describe('ProductImage', () => {
  it('should render with image string', () => {
    const wrapper = renderer.create(<ProductCardImage image={image} className="custom-class" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render image from context', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[0]}>{() => <ProductCard.Image />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
