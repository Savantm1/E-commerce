import { Rating } from "@material-ui/lab";
import React from "react";
import styled from "styled-components";
import ItemCheckbox from "./../../Brands/BrandsItem/ItemCheckbox";

const StyledRatingItem = styled.label`
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

const RatingItem = (props) => {
  return (
    <StyledRatingItem {...props}>
      <ItemCheckbox />
      <Rating name="read-only" value={props.star} readOnly />
    </StyledRatingItem>
  );
};

export default RatingItem;
