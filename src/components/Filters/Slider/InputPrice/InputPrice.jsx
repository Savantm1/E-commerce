import React from "react";
import styled from "styled-components";

const StyledInputPrice = styled.input.attrs({ type: "text" })`
  position: relative;
  max-width: 100px;
  width: 100%;
  border: 1px solid rgba(209, 209, 209, 1);
  border-radius: 12px;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 1rem 1rem 1.5rem;
  background: #f9f9f9;
  color: #a9a9a9;
  &:focus {
    border-color: rgba(146, 192, 100, 1);
  }
`;

const InputPrice = (props) => {
  return <StyledInputPrice {...props} />;
};

export default InputPrice;
