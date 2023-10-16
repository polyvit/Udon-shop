import React from 'react';
import Product from './Product';
import NotFound from '../../pages/NotFound';
import {RotatingLines} from  'react-loader-spinner';
import useProduct from './use-product';


const SingleProduct = () => {
  const {currentDish, status} = useProduct();

  return (
    <>
      {status === 'loading' && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {status === 'error' && <NotFound/>}
      {status === 'success' && <Product product={currentDish}/>}
    </>
  )
}

export default SingleProduct