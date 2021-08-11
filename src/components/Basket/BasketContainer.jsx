import React from "react";
import { useSelector } from "react-redux";
import Basket from "./Basket";

const BasketContainer = (props) => {
  const productsOnBasket = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Basket
      productsOnBasket={productsOnBasket}
      basketToggler={props.basketToggler}
      BasketHandler={props.BasketHandler}
      totalPrice={totalPrice}
    />
  );
};

export default BasketContainer;
