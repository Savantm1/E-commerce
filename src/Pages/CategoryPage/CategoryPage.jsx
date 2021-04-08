import React from "react";
import Filters from "../../components/Filters/Filters";
import PaginationSection from "../../components/PaginationSection/PaginationSection";
import ProductItemRow from "../../components/ProductItem/ProductItemRow/ProductItemRow";
import "./CategoryPage.scss";
const CategoryPage = (props) => {
  return (
    <div class="category_page">
      <Filters />
      <div class="category_page__container">
        <ProductItemRow />
        <ProductItemRow />
        <ProductItemRow />
        <ProductItemRow />
        <ProductItemRow />
      </div>
      <PaginationSection />
    </div>
  );
};

export default CategoryPage;
