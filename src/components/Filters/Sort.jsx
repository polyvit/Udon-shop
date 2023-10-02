import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Filters.module.css';
import { setSort } from '../../features/filter-slice';

const sortList = [
  {name: 'популярности (убыв)', sortProperty: '-rating'}, 
  {name: 'популярности (возр)', sortProperty: 'rating'}, 
  {name: 'цене (возр)', sortProperty: 'price'}, 
  {name: 'цене (убыв)', sortProperty: '-price'},
  {name: 'алфавиту (А - Я)', sortProperty: 'name'}, 
  {name: 'алфавиту (Я - А)', sortProperty: '-name'}, 
]

const Sort = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const {sort} = useSelector(state => state.filter);

  const handleClick = (obj) => {
    dispatch(setSort(obj));
    setIsOpen(false);
  }

  return (
    <div>
      <div className={styles.label} onClick={() => setIsOpen(!isOpen)}>
        <b>Сортировка по:</b>
        <span>{sort.name}</span>
      </div>
      {isOpen && (
        <div className={styles.popup}>
        <ul>
          {sortList.map((item, i) => <li key={i} onClick={() => handleClick(item)}>{item.name}</li>)}
        </ul>
      </div>
      )}
      
    </div>
  )
}

export default Sort