import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom:16px;
`;

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
