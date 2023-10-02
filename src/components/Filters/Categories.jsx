import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setCategoryId } from '../../features/filter-slice';
import styles from './Filters.module.css';

const categories = ["Все", "Курица", "Свинина", "Говядина", "Морепродукты"]

const Categories = () => {
  const dispatch = useDispatch();
  const {categoryId} = useSelector(state => state.filter);

  const handleChange = (i) => {
    dispatch(setCategoryId(i))
  }
  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((cat, i) => (
          <li key={i} onClick={() => handleChange(i)} className={categoryId === i ? `${styles.active} ${styles.link}` : `${styles.link}`}>{cat}</li>
        ))}
      </ul>
    </div>
  )
}

export default Categories