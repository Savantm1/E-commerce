import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h3`
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-weight: 600;
  margin:${(props) => props.margin || " 1rem 0px "};
  color: ${(props) => props.color || "#151515"};
  width: ${(props) => props.width || "auto"};
`;

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
