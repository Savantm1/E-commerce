import React from "react";
import basket from "./../../../assets/icons/ic-ecommerce-basket.svg";
import styles from "./BasketLogo.module.scss";

const BasketLogo = (props) => {
  return (
    <div className={styles.basket_block} onClick={props.BasketHandler}>
      <img className={styles.basket} src={basket} alt="basket" />
      <span className={styles.counter}>5</span>
    </div>
  );
};

export default BasketLogo;
