import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../Title/Title";
import CategoriesItem from "./CategoriesItem/CategoriesItem";

const StyledCategory = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const Category = (props) => {
  const categoriesArray = useSelector((state) => state.categories.categories);
  const categoriesLinks = categoriesArray.map((element, index) => {
    if (props.bestSelling) {
      return (
        <Link
          to={`/category/${element.id}/bestSelling`}
          key={index}
          style={{ width: "100%" }}
        >
          <CategoriesItem
            key={index}
            itemName={element.category_name}
            count={element.count}
          />
        </Link>
      );
    } else if (props.bestFromFarmers) {
      return (
        <Link
          to={`/category/${element.id}/bestFromFarmers`}
          key={index}
          style={{ width: "100%" }}
        >
          <CategoriesItem
            key={index}
            itemName={element.category_name}
            count={element.count}
          />
        </Link>
      );
    } else {
      return (
        <Link
          to={`/category/${element.id}`}
          key={index}
          style={{ width: "100%" }}
        >
          <CategoriesItem
            key={index}
            itemName={element.category_name}
            count={element.count}
          />
        </Link>
      );
    }
  });

  return (
    <StyledCategory {...props}>
      <Title>Categories</Title>
      {categoriesLinks}
    </StyledCategory>
  );
};

export default Category;
