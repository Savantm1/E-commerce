import React from "react";
import styled from "styled-components";
import ItemCounter from "./ItemCounter";

const StyledCategoriesItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  width: 100%;
`;

const CategoriesItem = (props) => {

  return (
      <StyledCategoriesItem {...props}>
          {props.itemName}
        <ItemCounter count={props.count} />
      </StyledCategoriesItem>
  );
};

export default CategoriesItem;
