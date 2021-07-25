import React, { useContext } from 'react';
import { CartContext } from '../../context/ContextApi';
import './subtotal.css';

const Subtotal = () => {
  const { total, itemCount, clearCart, handleCheckout } =
    useContext(CartContext);
  return (
    <div className='subtotal'>
      <h3>
        Total Items : <span>{itemCount}</span>
      </h3>
      <h3>
        Total : <span>${total}</span>
      </h3>
      <div className='subtotal-btn'>
        <button className='checkout-btn' onClick={() => handleCheckout()}>
          CheckOut
        </button>
        <button className='clear-btn' onClick={() => clearCart()}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Subtotal;
