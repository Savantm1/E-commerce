import React from "react";
import CategoryMenu from "../Filters/CategoryMenu/CategoryMenu";
import ProductItem from "../ProductItem/ProductItem";

const CategorySectionRowProducts = (props) => {
  return (
    <>
      <section className="category_section_row">
        <CategoryMenu
          className="category_section_row__filter"
          categoryName={props.categoryName}
        />
        <div className="recipes_container">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </section>
    </>
  );
};

export default CategorySectionRowProducts;