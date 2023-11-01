import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import styles from './Header.module.css';
import { sumItems } from '../../utils/common';
import { toggleForm } from '../../features/authorization/user-slice';
import useAuth from '../User/use-auth';
import { ROUTES } from '../../utils/routes';
import { RootState } from '../../features/store';

const Header = () => {
  const dispatch = useDispatch();
  const {items, totalPrice} = useSelector((state: RootState) => state.cart);
  const {isAuth, displayName} = useAuth();

  return (
    <div className={styles.panel}>
            {isAuth ? (
              <>
                <p><Link to={ROUTES.PROFILE}>Личный кабинет</Link></p>
                <div className={styles.avatar}>
                  <span>{displayName}</span>
                </div>
              </>
            ) : (
              <>
                <p onClick={() => dispatch(toggleForm(true))}>Войти</p>
                <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0002 4.33331C14.1494 4.33331 15.2516 4.78986 16.0643 5.60252C16.877 6.41517 17.3335 7.51737 17.3335 8.66665C17.3335 9.81592 16.877 10.9181 16.0643 11.7308C15.2516 12.5434 14.1494 13 13.0002 13C11.8509 13 10.7487 12.5434 9.93603 11.7308C9.12338 10.9181 8.66683 9.81592 8.66683 8.66665C8.66683 7.51737 9.12338 6.41517 9.93603 5.60252C10.7487 4.78986 11.8509 4.33331 13.0002 4.33331ZM13.0002 15.1666C17.7885 15.1666 21.6668 17.1058 21.6668 19.5V21.6666H4.3335V19.5C4.3335 17.1058 8.21183 15.1666 13.0002 15.1666Z"
                fill="#333333"
              />
            </svg>
              </>
            )}

            <div>
              <Link to={"/Udon-shop/cart"} className={styles["cart-button"]}>
                <span>{totalPrice}р</span>
                <div className={styles.middle}></div>
                <span>{sumItems(items)}</span>
              </Link>
            </div>
          </div>
  )
}

export default Header