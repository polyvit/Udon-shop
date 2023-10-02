import React from 'react';

import styles from './Cart.module.css';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../features/cart-slice';

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const {imageUrl, name, fishBase, price, count, extras, id} = item;
  
  return (
    <div className={styles.item}>
                <div className={styles.main}>
                  <img src={imageUrl} alt="food-image" />
                  <div className={styles.info}>
                    <h3 className='base-title'>{name}</h3>
                    <p>Бульон: {fishBase ? "рыбный" : "мисо"}</p>
                  </div>
                </div>
                <div className={styles.count}>
                  <div className={`${styles.circle} ${styles["circle-count"]}`}>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 485 485"
                      xmlSpace="preserve"
                      onClick={() => dispatch(minusItem(item))}
                    >
                      <rect y="227.5" width="485" height="30" />
                    </svg>
                  </div>
                  <b>{count}</b>
                  <div className={`${styles.circle} ${styles["circle-count"]}`}>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 455 455"
                      xmlSpace="preserve"
                      onClick={() => dispatch(addItem(item))}
                    >
                      <polygon
                        points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 455,242.5 "
                      />
                    </svg>
                  </div>
                </div>
                <span className="price">{price * count + extras}₽</span>
                <div className={`${styles.circle} ${styles["circle-remove"]}`}>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 371.23 371.23"
                    xmlSpace="preserve"
                    onClick={() => dispatch(removeItem(id))}
                  >
                    <polygon
                      points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "
                    />
                  </svg>
                </div>
              </div>
  )
}

export default CartItem