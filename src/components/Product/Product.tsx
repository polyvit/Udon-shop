import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';

import styles from './Product.module.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cart-slice';
import useAuth from '../User/use-auth';
import { CardOneItem } from '../../features/cards/types';

type OptionItem = {
  name: string;
  price: number;
  isChosen: boolean;
}
type ProductProps = {
  product: CardOneItem | null;
}

const optionsList: OptionItem[] = [
  {name: "Древесные грибы 50 г", price: 110, isChosen: false},
  {name: "Капуста кимчи 30 г", price: 110, isChosen: false},
  {name: "Нори 3 г", price: 70, isChosen: false},
  {name: "Адзитама 50 г", price: 50, isChosen: false},
]

const Product: React.FC<ProductProps> = ({product}) => {
  
  let {name = '', imageUrl = '', price = 0} = product || {};
  const dispatch = useDispatch();
  const [options, setOptions] = useState(optionsList);
  const [amount, setAmount] = useState(1);
  const {search} = useLocation();
  const {isAuth} = useAuth();

  if (isAuth) {
    price = price * 0.9;
  }

  const calcExtraSum = () => {
    return options.filter(option => option.isChosen).reduce((acc, option) => acc + option.price, 0);
  }

  const toggleOption = (i: number) => {
    const newOptions = structuredClone(options);
    newOptions[i].isChosen = !newOptions[i].isChosen;
    setOptions(newOptions);
  }
  const addToCartHandle = () => {
    dispatch(addItem({
      ...product,
      price: price,
      fishBase: search.slice(-1) === '0' ? false : true,
      extras: calcExtraSum(),
      count: amount,
    }))  
  }

  return (
    <div className={styles.product}>
            <img src={imageUrl} alt="product-photo" />
            <div className={styles.info}>
              <h3 className="big-title">{name}</h3>
              <div className={styles.line}></div>
              <div>
                <span className="price">{price}₽</span>
                <span className={styles.weight}>/ 400 гр</span>
              </div>
              <p>Количество порций:</p>
              <div className={styles.order}>
                <select className={styles.amount} onChange={(e) => setAmount(Number(e.target.value))}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <Link to={"/cart"} className="button" onClick={addToCartHandle}>В корзину</Link>
              </div>
              <div className={styles.line}></div>
              <p className="base-title">Сделать еще вкуснее</p>
              <ul className={styles.options}>
                {options.map((option, i) => (
                  <li key={i}>
                  <div className={styles.left}>
                    <span>{option.name}</span>
                    <span className="small-price">{option.price}₽</span>
                  </div>
                  <div className={option.isChosen ? `${styles.right} ${styles.active}` : `${styles.right}`} onClick={() => toggleOption(i)}>
                   <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.003 512.003" xmlSpace="preserve"><path d="M175.165,458.09c-3.557,0-7.006-1.428-9.539-3.934L3.941,292.471c-5.255-5.255-5.255-13.797,0-19.052s13.797-5.255,19.052,0 l151.39,151.39l313.91-366.215c4.904-5.659,13.393-6.306,18.998-1.455c5.659,4.851,6.306,13.339,1.482,18.998L185.405,453.401 c-2.425,2.829-5.955,4.554-9.701,4.716C175.515,458.09,175.326,458.09,175.165,458.09z"></path></svg>
                  </div>
                </li>
                ))}
              </ul>
            </div>
          </div>
  )
}

export default Product