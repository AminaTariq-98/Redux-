import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/Slices/CardSlice';
import { fetchProducts } from '../Store/Slices/ProductSlice';
import { STATUSES } from '../Store/Slices/ProductSlice';

const Product = () => {
  const imgContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imgStyle = {
    height: '150px',
    width: '150px',
  };

  const cardStyle = {
    padding: '20px',
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    marginTop: '15px', 
  };

  //const [products, setProducts] = useState([]);
  const {data: products, status} = useSelector((state) => state.product)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const getWords = (title) => {
    const words = title.split(' ');
    return words.slice(0, 2).join(' ');
  };

  const handleAdd = (product) =>{
    dispatch(add(product))
  }

  if (status === STATUSES.LOADING){
    return <h3 style={{textAlign: 'center'}}>Loading...</h3>
  }
  if (status === STATUSES.ERROR){
    return <h3 style={{textAlign: 'center'}}>Something went Wrong!</h3>
  }

  return (
    <div className='row'>
      {products.map((product) => (
        <div className='col-md-3' key={product.id}>
          <div className='card my-3' style={cardStyle}>
            <div style={imgContainer}>
              <img src={product.image} style={imgStyle} alt='img' />
            </div>
            <h4 className='my-3'>{getWords(product.title)}</h4>
            <h5>${product.price}</h5>
            <button style={buttonStyle} className='btn' onClick={() => handleAdd(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
