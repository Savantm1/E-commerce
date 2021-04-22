import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../Filters/Title/Title'
import BasketItem from './BasketItem/BasketItem'
import "./Basket.scss";
import Button from '../Button/Button';

const Basket = (props) => {


    return (
        <>
        <div className="basket_cover" onClick={props.BasketHandler}>
          <div className="shopping_cart">
              <div className="shopping_cart__header_block">
                <Title fontSize='26px'>Shopping cart</Title>    
                <Link to="#" className="shopping_cart__close" onClick={props.BasketHandler}>Close <span>×</span></Link>
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
        </div>
        </>
    )
}

export default Basket
