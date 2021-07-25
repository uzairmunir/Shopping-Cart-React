import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Products from './home/products/Products';
import ProductDetail from './home/products/ProductDetail';
import Cart from './home/cart/Cart';
import About from './about/About';

const RouteConfig = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteConfig;
