import React from "react";
import Title from "../Filters/Title/Title";
import BasketItem from "./BasketItem/BasketItem";
import "./Basket.scss";
import Button from "../Button/Button";
import close from "./../../assets/icons/close.svg";
import { toast } from "react-toastify";

const Basket = (props) => {
  const toastDelete = () => {
    toast.warning(" Delete product from cart !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  let products = props.productsOnBasket.map((element, index) => {
    return (
      <BasketItem key={index} productData={element} toastDelete={toastDelete} />
    );
  });

  return (
    <>
      <div
        className={
          props.basketToggler
            ? "basket_cover basket_cover--active"
            : "basket_cover"
        }
        onClick={props.BasketHandler}
      ></div>
      <div
        className={
          props.basketToggler
            ? "shopping_cart--active shopping_cart"
            : "shopping_cart"
        }
      >
        <div className="shopping_cart__header_block">
          <Title fontSize="2rem">Shopping cart</Title>
          <img
            className="shopping_cart__close_img"
            onClick={props.BasketHandler}
            src={close}
            alt="Close"
          />
        </div>
        <div className="shopping_cart_container">
          {products.length > 0 ? (
            products
          ) : (
            <p className="shopping_cart__empty">Cart is empty. </p>
          )}
        </div>
        <div className="total_price">
          <span>Subtotal</span>
          <p>{props.totalPrice} USD</p>
          <div className="continue_shopping">
            <span onClick={props.BasketHandler}>Continue shopping</span>
            <Button
              width="180px"
              className="shopping_cart__btn"
              value="Go to Checkout"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
