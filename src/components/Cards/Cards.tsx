import React from 'react';
import styles from './Cards.module.css';
import CardItem from './CardItem';
import Skeleton from './Skeleton';
import useCards from './use-cards';

const Cards = () => {
  const {result, status} = useCards();

  const skeletons = [...new Array(8)].map((_, index: number) => <Skeleton key={index} />);

  return (
    <div className={styles.cards}>
      {status === 'loading' ? skeletons : result.length > 0 ? result.map(item => <CardItem key={item.id} {...item}/>) : <h3>Ничего не найдено</h3>}
    </div>
  )
}

export default Cards