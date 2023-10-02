import React from 'react';
import { useState, useRef, useCallback } from 'react';
import debounce from 'lodash.debounce';
import styles from './Filters.module.css';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../features/filter-slice';

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef();

  const updateSearchValue = useCallback(debounce((str) => {
    dispatch(setSearchValue(str))
  }, 150), [])
  const handleChange = ({target: {value}}) => {
    setInputValue(value);
    updateSearchValue(value);
  }
  const handleClick = () => {
    setInputValue('');
    dispatch(setSearchValue(''))
    inputRef.current.focus();
  }
  

  return (
    <div style={{position: "relative"}}>
              <svg class={styles.icon} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  xmlSpace="preserve">
                <g><g><path d="M508.255,490.146l-128-128c-0.06-0.06-0.137-0.077-0.196-0.128c34.193-38.434,55.142-88.917,55.142-144.418 c0-120.175-97.425-217.6-217.6-217.6S0.001,97.425,0.001,217.6s97.425,217.6,217.6,217.6c55.501,0,105.975-20.949,144.418-55.151 c0.06,0.06,0.077,0.137,0.128,0.196l128,128c2.5,2.509,5.777,3.755,9.054,3.755s6.554-1.246,9.054-3.746 C513.247,503.253,513.247,495.147,508.255,490.146z M217.601,409.6c-105.865,0-192-86.135-192-192s86.135-192,192-192 s192,86.135,192,192S323.466,409.6,217.601,409.6z"/></g></g>
              </svg>
              <input className={styles.input} type="text" placeholder='Поиск блюда' value={inputValue} onChange={handleChange} ref={inputRef}/>
              {inputValue && (
                <svg
                    version="1.1"
                    class={styles.clearIcon}
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 371.23 371.23"
                    xmlSpace="preserve"
                    onClick={handleClick}
                  >
                    <polygon
                      points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "
                    />
              </svg>
              )}
            </div>
  )
}

export default Search