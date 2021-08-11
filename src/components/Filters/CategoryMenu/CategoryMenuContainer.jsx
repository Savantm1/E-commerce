import React from "react";
import { useSelector } from "react-redux";
import CategoryMenu from "./CategoryMenu";

const CategoryMenuContainer = (props) => {
  const categoriesArray = useSelector((state) => state.categories.categories);

  return (
    <CategoryMenu
      categories={categoriesArray}
      className="category_section_row__filter"
      categoryName={props.categoryName}
      bestSelling={props.bestSelling || false}
      bestFromFarmers={props.bestFromFarmers || false}
    />
  );
};

export default CategoryMenuContainer;
