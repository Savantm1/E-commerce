import React from "react";
import styled from "styled-components";
import ItemCheckbox from "./ItemCheckbox";

const StyledBrandsItem = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 12px;
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
