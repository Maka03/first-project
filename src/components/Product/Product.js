import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

function Product() {
  const { id } = useParams();
  const products = [
    { id: 0, name: 'Laptop', price: '$999' },
    { id: 1, name: 'Book', price: '$19' },
    { id: 2, name: 'T-shirt', price: '$29' },
  ];

  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div className="product-container">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default Product;
