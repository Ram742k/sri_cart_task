import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/details/:id" element={<ProductDetails />} />
    </Routes>
    </>
  );
};

export default App;
