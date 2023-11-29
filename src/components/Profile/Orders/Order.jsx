import React from "react";
import styles from "./Orders.module.css";

const Order = () => {
  return (
    <div className={styles.order}>
      <div>
        <h5>2023-05-07, 13:05</h5>
        <p>Состав: Удон с курицей, Онтама с яйцом</p>
      </div>
      <div className={styles.right}>
        <span>490 руб</span>
        <span>4 шт.</span>
      </div>
    </div>
  );
};

export default Order;
