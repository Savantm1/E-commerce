import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h3`
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: 600;
  margin:${(props) => props.margin || "0px 16px 0px 0px "};
  color: ${(props) => props.color || "#151515"};
  width: ${(props) => props.width || "auto"};
`;

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
