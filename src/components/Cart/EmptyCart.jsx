import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

const EmptyCart = () => {
  return (
    <>
      <h3 className='big-title'>Здесь пока пусто</h3>
      <p className={styles.empty}>Для того, чтобы сделать заказ, вернитесь на главную страницу.</p>
      <Link to={"/"} className="button">Вернуться назад</Link>
    </>
  )
}

export default EmptyCart