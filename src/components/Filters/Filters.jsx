import React from "react";
import styled from "styled-components";
import Brands from "./Brands/Brands";
import Category from "./Categories/Category";

const StyledFilters = styled.aside`
  display: flex;
  flex-direction: column;
  max-width: 260px;
`;

const Filters = (props) => {
  return (
    <StyledFilters {...props}>
      <Category />
      <Brands/>
    </StyledFilters>
  );
};

export default Filters;
