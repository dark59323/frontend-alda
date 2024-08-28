// src/components/ProductItem.js
import React from 'react';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  const addToCart = () => {
    console.log(`Adding ${product.name} to cart`);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;