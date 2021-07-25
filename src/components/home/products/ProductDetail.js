import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../../data.json';
import { CartContext } from '../../context/ContextApi';
import './productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const productDetail = Data[id];
  const { addProduct, cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className='product-detail'>
      <div className='product-detail-img'>
        <img src={productDetail.src} alt='product-detail' />
      </div>
      <div className='product-detail-content'>
        <h3>{productDetail.title}</h3>
        <h3>${productDetail.price}</h3>
        <h5>{productDetail.content}</h5>
        <button className='cart-btn' onClick={() => addProduct(productDetail)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
