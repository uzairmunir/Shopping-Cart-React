import { Card, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './cart.css';
import { CartContext } from '../../context/ContextApi';
import DeleteIcon from '@material-ui/icons/Delete';

const CartItem = ({ image, title, price, quantity, product }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);
  return (
    <Card className='cart-card'>
      <img src={image} alt='cart-img' className='cart-img' />
      <div className='card-detail'>
        <div className='cart-title'>
          <Typography variant='body1'>{title}</Typography>
          <Typography variant='body2'>Price : ${price}</Typography>
        </div>
        <Typography variant='h5'>Quantity : {quantity}</Typography>
        <div className='buttons'>
          <AddIcon className='increase-btn' onClick={() => increase(product)} />
          {quantity > 1 ? (
            <RemoveIcon
              className='decrease-btn'
              onClick={() => decrease(product)}
            />
          ) : (
            <DeleteIcon
              className='delete-btn'
              onClick={() => removeProduct(product)}
            />
          )}
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
