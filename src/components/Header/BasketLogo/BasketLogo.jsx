import React from "react";
import basket from "./../../../assets/icons/ic-ecommerce-basket.svg";
import styles from "./BasketLogo.module.scss";
import { useSelector } from "react-redux";

const BasketLogo = (props) => {
  const totalCount = useSelector((state) => state.cart.totalCount);
  return (
    <div className={styles.basket_block} onClick={props.BasketHandler}>
      <img className={styles.basket} src={basket} alt="basket" />
      <span className={styles.counter}>{totalCount}</span>
    </div>
  );
};

export default BasketLogo;
