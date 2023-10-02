import React from 'react';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import Product from './Product';
import NotFound from '../../pages/NotFound';
import { loadItemById } from '../../features/cards-slice';
import {RotatingLines} from  'react-loader-spinner';


const SingleProduct = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {currentDish} = useSelector(state => state.cards);
  const {status} = useSelector(state => state.cards)

  useEffect(() => {
    dispatch(loadItemById(id))
  }, [])

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