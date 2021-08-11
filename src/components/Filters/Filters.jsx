import React from "react";
import styled from "styled-components";
import Brands from "./Brands/Brands";
import Category from "./Categories/Category";
import Rating from "./Rating/Rating";
import SliderPrice from "./Slider/Slider";

const StyledFilters = styled.aside`
  display: flex;
  flex-direction: column;
  max-width: 260px;
`;

const Filters = (props) => {
  return (
    <StyledFilters {...props}>
      <Category
        bestSelling={props.bestSelling}
        bestFromFarmers={props.bestFromFarmers}
      />
      <Brands />
      <Rating />
      <SliderPrice />
    </StyledFilters>
  );
};

export default Filters;
