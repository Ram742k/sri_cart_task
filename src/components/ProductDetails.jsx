import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  const products = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: 300, description: 'Description of Product 3' },
  ];

  const product = products.find((item) => item.id === parseInt(id));

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
