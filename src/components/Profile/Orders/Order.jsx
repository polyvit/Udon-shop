import React from "react";
import styles from "./Orders.module.css";
import { transformDate, flatItemsArray, sumItems } from "../../../utils/common";

const Order = ({ date, totalPrice, items }) => {
  return (
    <div className={styles.order}>
      <div className={styles.left}>
        <h5>{transformDate(date)}</h5>
        <p>Состав: {flatItemsArray(items)}</p>
      </div>
      <div className={styles.right}>
        <span>{totalPrice} руб</span>
        <span>{sumItems(items)} шт.</span>
      </div>
    </div>
  );
};

export default Order;
