import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../redux/BlogSlice";
import { getProducts } from "../../redux/ProductsSlice";
import MainPage from "./MainPage";

const MainPageContainer = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProducts({ limit: 20, bestSelling: true, bestFromFarmers: true })
    );
    dispatch(getBlogs());
  }, [dispatch]);

  const productsArray = useSelector((state) => state.products.productsArray);
  const bestFromFarmersArray = productsArray.filter(
    (elem) => elem.bestFromFarmers
  );
  const bestSellingsArray = productsArray.filter((elem) => elem.bestSelling);

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
