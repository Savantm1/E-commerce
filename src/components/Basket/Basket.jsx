import React from 'react';
import Title from '../Filters/Title/Title';
import BasketItem from './BasketItem/BasketItem';
import "./Basket.scss";
import Button from '../Button/Button';
import close from "./../../assets/icons/close.svg";

const Basket = (props) => {

    return (
        <>
        <div className={props.basketToggler ? "basket_cover basket_cover--active" : "basket_cover"}   onClick={props.BasketHandler}>
          </div>
          <div className={props.basketToggler ?"shopping_cart--active shopping_cart" : "shopping_cart"}>
              <div className="shopping_cart__header_block">
                <Title fontSize='2rem'>Shopping cart</Title>    
                <img className="shopping_cart__close_img"  onClick={props.BasketHandler} src={close} alt="Close"/>
              </div>
            <div className="shopping_cart_container">
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            </div>
            <div className="total_price">
                <span>Subtotal</span>
                <p>73.98 USD</p>
                <div className="continue_shopping">
                    <span onClick={props.BasketHandler}>Continue shopping</span>
                    <Button width="180px" value="Go to Checkout"/>
                </div>
            </div>
          </div>   
        </>
    )
}

export default Basket
