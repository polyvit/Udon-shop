import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h3 className='big-title'>Ничего не найдено</h3>
      <Link to={"/Udon-shop/"} className="button">Вернуться на главную</Link>
    </>
  )
}

export default NotFound