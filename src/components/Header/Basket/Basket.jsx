import React from 'react'
import basket from "./../../../assets/icons/ic-ecommerce-basket.svg"
import styles from "./Basket.module.scss"

const Basket = (props) => {
    return (
        <div className={styles.basket_block}>
            <img className={styles.basket} src={basket} alt="basket"/>
            <span className={styles.counter}>5</span>
        </div>
    )
}

export default Basket
