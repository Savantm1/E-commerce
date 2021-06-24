import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, selectPage } from "../../redux/SingleCategorySlice";
import CategoryPage from "./CategoryPage";
import { withRouter } from "react-router";

const CategoryPageContainer = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getCategory({
        category: props.match.params.category,
        bestFromFarmers: props.bestFromFarmers,
        bestSelling: props.bestSelling,
        limit: 9,
      })
    );
    dispatch(selectPage(1))
  }, [
    dispatch,
    props.match.params.category,
    props.bestFromFarmers,
    props.bestSelling,
  ]);

  const currentPage = useSelector(state=> state.category.currentPage);
  const changePageFunc = (page) => {
      dispatch(selectPage(page));
      dispatch(
          getCategory({
            category: props.match.params.category,
            limit: 9,
            page
          })
        );
  }

  const categoryProductsData = useSelector(
    (state) => state.category.categoryProducts.products
  );
  const count = useSelector((state) => state.category.categoryProducts.count);
  const category = useSelector(
    (state) => state.category.categoryProducts.categoryName
  );

  return (
    <CategoryPage
      categoryProductsData={categoryProductsData ? categoryProductsData : []}
      view={props.view}
      changeView={props.changeView}
      category={category}
      count={count}
      bestFromFarmers={props.bestFromFarmers}
      bestSelling={props.bestSelling}
      changePageFunc={changePageFunc}
      currentPage={currentPage}
    />
  );
};

let WithUrlDataCategory = withRouter(CategoryPageContainer);

export default WithUrlDataCategory;
