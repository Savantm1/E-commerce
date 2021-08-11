import React from "react";
import styled from "styled-components";
import InputPrice from "./InputPrice";
import InputSub from "./InputSub";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputPriceContainer = (props) => {
  return (
    <StyledContainer {...props}>
      <InputSub title={props.title} />
      <InputPrice />
    </StyledContainer>
  );
};

export default InputPriceContainer;
