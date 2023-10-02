import React from 'react';
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';

const Home = () => {
  return (
    <>
      <Filters/>
      <Cards/>
      <Pagination/>
    </>
  )
}

export default Home;