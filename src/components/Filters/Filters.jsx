import React from 'react';

import styles from './Filters.module.css';
import Categories from './Categories';
import Sort from './Sort';
import Search from './Search';

const Filters = () => {
  return (
    <div className={styles.filters}>
      <Categories/>
      <Search/>
      <Sort/>
    </div>
  )
}

export default Filters