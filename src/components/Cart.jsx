import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  return (
    <div>
    <div className="container mt-5">
      <h1>Cart</h1>
      <div className="row">
        {cart.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card p-3">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button
                className="btn btn-info"
                onClick={() => navigate(`/details/${product.id}`)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};  

export default Cart;
