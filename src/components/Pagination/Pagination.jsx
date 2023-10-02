import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../features/filter-slice';

const Pagination = () => {
  const dispatch = useDispatch();
  return (
    <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
        pageRangeDisplayed={8}
        pageCount={2}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
  )
}

export default Pagination