import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { loadItems } from '../../features/cards-slice';
import { selectItemsBySearch } from '../../features/filter-slice';
import styles from './Cards.module.css';
import CardItem from './CardItem';
import Skeleton from './Skeleton';

const Cards = () => {
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.cards)
  const {categoryId, searchValue, sort, currentPage} = useSelector(state => state.filter);
  const result = useSelector(({cards: {items}}) => selectItemsBySearch(items, searchValue));

  const getParams = () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes('-') ? 'desc' : 'asc';
    const category = categoryId > 0 ? String(categoryId) : '';
    return { page: currentPage, limit: 8, search: searchValue, sortBy, order, category}
  }

  useEffect(() => {
    dispatch(loadItems(getParams()));
  }, [categoryId, searchValue, sort.sortProperty, currentPage]);

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className={styles.cards}>
      {status === 'loading' ? skeletons : result.map(item => <CardItem key={item.id} {...item}/>)}
    </div>
  )
}

export default Cards