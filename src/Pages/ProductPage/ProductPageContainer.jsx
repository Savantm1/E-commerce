import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { getCategory } from "../../redux/SingleCategorySlice";
import { getProduct } from "../../redux/SingleProductSlice";
import ProductPage from "./ProductPage";

const ProductPageContainer = (props) => {
  ;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(props.match.params.product));
    dispatch(
      getCategory({
        limit: 5,
        bestFromFarmers: false,
        bestSelling: false,
        category: props.match.params.category,
      })
    );
    ;
  }, [dispatch, props.match.params]);

  const productData = useSelector((state) => state.product.product);
  const products = useSelector(
    (state) => state.category.categoryProducts.products
  );

  return (
    <ProductPage
      productData={productData ? productData : []}
      products={products ? products : []}
      category={props.match.params.category}
    />
  );
};

let WithUrlProductPageContainer = withRouter(ProductPageContainer);

export default WithUrlProductPageContainer;
