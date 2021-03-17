import React from "react";
import styled from "styled-components";
import Title from "./../Title/Title";
import RatingItem from "./RatingItem/RatingItem";
const StyledRating = styled.div`
margin-bottom: 48px;
`;

const stars = [1, 2, 3, 4, 5];

const starsElements = stars.reverse().map((element) => {
  return <RatingItem key={element} star={element} />;
});
const Rating = (props) => {
  return (
    <StyledRating {...props}>
      <Title>Price</Title>
      {starsElements}
    </StyledRating>
  );
};

export default Rating;
