// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';

const products = [
  { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 200, image: 'https://via.placeholder.com/150' },
  // Agrega más productos aquí
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
