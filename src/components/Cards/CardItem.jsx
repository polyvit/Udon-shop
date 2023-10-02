import React from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import styles from './Cards.module.css';
import useAuth from '../User/use-auth';

const types = ["мисо", "рыбный"];

const CardItem = ({id, imageUrl, name, price}) => {
  const {isAuth} = useAuth();
  const [activeType, setActiveType] = useState(0)
  return (
    <div className={styles.card}>
              <img className={styles.photo} src={imageUrl} alt="" />
              <div className={styles.info}>
                <p className={`base-title ${styles.title}`}>{name}</p>
                <div>
                  <ul className={styles.list}>
                    {types.map((type, i) => (
                      <li key={i} className={activeType === i ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => setActiveType(i)}>{type}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.order}>
                  {isAuth ? (
                    <span className="price">
                      {price * 0.9}₽
                      <span className={`${styles.oldprice} ${styles.visible}`}>{price}₽</span>
                    </span>
                  ) : (
                    <span className="price">{price}₽</span>
                  )}
                  <Link to={`/dishes/${id}?baseType=${activeType}`} className="button">Заказать</Link>
                </div>
              </div>
            </div>
  )
}

export default CardItem