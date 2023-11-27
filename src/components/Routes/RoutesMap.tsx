import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {ROUTES} from '../../utils/routes';
import Home from '../Home/Home';
import SingleProduct from '../Product/SingleProduct';
import Cart from '../Cart/Cart';
import NotFound from '../../pages/NotFound';
import Profile from '../../pages/Profile';

const RoutesMap = () => {

  return (
    <Routes>
      <Route path={ROUTES.HOME}  element={<Home/>}/>
      <Route path={ROUTES.DISH} element={<SingleProduct/>}/>
      <Route path={ROUTES.CART} element={<Cart/>}/>
      <Route path={ROUTES.PROFILE} element={<Profile/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default RoutesMap