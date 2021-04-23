import React from "react";
import styled from "styled-components";
import ItemCheckbox from "./ItemCheckbox";

const StyledBrandsItem = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  width: 100%;
`;

const BrandsItem = (props) => {
  return (
    <StyledBrandsItem {...props}>
      <ItemCheckbox />
      {props.itemName}
    </StyledBrandsItem>
  );
};

export default BrandsItem;
