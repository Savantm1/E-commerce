import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ProductsSlice";
import MainPage from "./MainPage";

const MainPageContainer = (props) => {
  debugger;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProducts({ limit: 20, bestSelling: true, bestFromFarmers: true })
    );
    debugger;
  }, [dispatch]);

  const productsArray = useSelector((state) => state.products.productsArray);
  const bestFromFarmersArray = productsArray.filter(
    (elem) => elem.bestFromFarmers
  );
  const bestSellingsArray = productsArray.filter((elem) => elem.bestSelling);

  debugger;
  const countProducts = 3;

  return (
    <MainPage
      bestSellingArray={bestSellingsArray ? bestSellingsArray : []}
      bestFromFarmersArray={bestFromFarmersArray ? bestFromFarmersArray : []}
      countProducts={countProducts}
    />
  );
};

export default MainPageContainer;
