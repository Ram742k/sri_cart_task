import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
      ];

      const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate('/cart'); 
      };

  return (
    <div className="container mt-5">
      <h1>Product List</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card p-3">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="btn btn-info"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList