import { Rating } from "@material-ui/lab";
import React from "react";
import styled from "styled-components";
import ItemCheckbox from "./../../Brands/BrandsItem/ItemCheckbox";

const StyledRatingItem = styled.label`
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

const RatingItem = (props) => {
  return (
    <StyledRatingItem {...props}>
      <ItemCheckbox />
      <Rating name="read-only" value={props.star} readOnly />
    </StyledRatingItem>
  );
};

export default RatingItem;
