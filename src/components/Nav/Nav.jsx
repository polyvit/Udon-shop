import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to={ROUTES.PROFILE}>Личные данные</Link>
        </li>
        <li>
          <Link to={ROUTES.ORDERS}>История заказов</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
