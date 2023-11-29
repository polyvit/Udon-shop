import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const styles = {
  li: {
    marginBottom: "10px",
    width: "max-content",
    borderBottom: "1px solid #333333",
  },
};

const Nav = () => {
  return (
    <nav>
      <ul>
        <li style={styles.li}>
          <Link to={ROUTES.PROFILE}>Личные данные</Link>
        </li>
        <li style={styles.li}>
          <Link to={ROUTES.ORDERS}>История заказов</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
