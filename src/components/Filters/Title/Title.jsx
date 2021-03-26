import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h3`
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: 600;
  margin-bottom:16px;
  color: ${(props) => props.color || "#151515"};
`;

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
