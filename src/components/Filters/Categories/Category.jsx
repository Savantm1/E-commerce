import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import CategoriesItem from "./CategoriesItem/CategoriesItem";

const categoryData = [
  { itemName: "First", count: "12" },
  { itemName: "Secont", count: "112" },
  { itemName: "Firtd", count: "122" },
  { itemName: "Fourth", count: "123" },
];

const categoryItems = categoryData.map((element, index) => {
  return (
    <CategoriesItem
      key={index}
      itemName={element.itemName}
      count={element.count}
    />
  );
});

const StyledCategory = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 48px;
`;

const Category = (props = categoryData) => {
  console.log(props);
  return (
    <StyledCategory {...props}>
      <Title>Category</Title>
      <CategoriesItem itemName="CategoryItem" count="124" />
      {categoryItems}
    </StyledCategory>
  );
};

export default Category;
