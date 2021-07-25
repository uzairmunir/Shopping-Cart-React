import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { CartContext } from '../../context/ContextApi';
import './cart.css';
import CartItem from './CartItem';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import Subtotal from './Subtotal';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart'>
      <h2>Cart</h2>
      <h6>This is Cart Page</h6>
      {cartItems.length > 0 ? (
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12}>
            {cartItems.map((cartProduct) => (
              <CartItem
                key={cartProduct.id}
                image={cartProduct.src}
                title={cartProduct.title}
                price={cartProduct.price}
                quantity={cartProduct.quantity}
                product={cartProduct}
              />
            ))}
          </Grid>
          <Grid item lg={4} md={4} sm={12}>
            <Subtotal />
          </Grid>
        </Grid>
      ) : (
        <div>
          <h3>Currently Your Cart Is Empty</h3>
          <HourglassEmptyIcon className='empty-btn' />
        </div>
      )}
    </div>
  );
};

export default Cart;
