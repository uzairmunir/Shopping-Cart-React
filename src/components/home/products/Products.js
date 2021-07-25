import { Grid, Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import data from '../../../data.json';
import './products.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/ContextApi';

const Products = () => {
  const [products, setProducts] = useState(data);
  const { addProduct } = useContext(CartContext);
  return (
    <div className='container'>
      <h1>Products</h1>
      <div className='products-container'>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item lg={4} md={3} sm={12} key={product.id}>
              <Card className='card'>
                <img
                  className='product-img'
                  src={product.src}
                  alt='product-img'
                />
                {/* <Typography className='title' variant='h4'>
                    {product.title}
                  </Typography> */}

                <button className='btn' onClick={() => addProduct(product)}>
                  Add To cart
                </button>
                <Link to={`/${product.id}`} className='detail'>
                  Detail
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Products;
