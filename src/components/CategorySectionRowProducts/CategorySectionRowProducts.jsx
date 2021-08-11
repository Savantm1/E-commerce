import React from "react";
import CategoryMenuContainer from "../Filters/CategoryMenu/CategoryMenuContainer";
import Title from "../Filters/Title/Title";
import ProductItem from "../ProductItem/ProductItem";

const CategorySectionRowProducts = (props) => {
  const productsArray = props.productsArray.map((product, index) => {
    if (index < props.countProducts) {
      return <ProductItem key={index} productData={product} />;
    }
    return null;
  });
  return (
    <>
      <section className="category_section_row">
        <CategoryMenuContainer
          categoryName={props.categoryName}
          bestSelling={props.bestSelling || false}
          bestFromFarmers={props.bestFromFarmers || false}
        />
        <div className="recipes_container">
          <Title>{props.categoryName}</Title>
          {productsArray}
        </div>
      </section>
    </>
  );
};

export default CategorySectionRowProducts;
