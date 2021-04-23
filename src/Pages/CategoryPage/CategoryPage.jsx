import React from "react";
import Filters from "../../components/Filters/Filters";
import PaginationSection from "../../components/PaginationSection/PaginationSection";
import ProductItemRow from "../../components/ProductItem/ProductItemRow/ProductItemRow";
import ProductItem from "../../components/ProductItem/ProductItem";
import "./CategoryPage.scss";

const CategoryPage = (props) => {
  return (
    <>
      <div class="category_page">
        <Filters />
        <div class="category_page__container">
          {props.view ? (
            <div>
              <ProductItemRow />
              <ProductItemRow />
              <ProductItemRow />
              <ProductItemRow />
              <ProductItemRow />
            </div>
          ) : (
            <div className="category_grid">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          )}
        </div>
      </div>
      <PaginationSection />
    </>
  );
};

export default CategoryPage;
