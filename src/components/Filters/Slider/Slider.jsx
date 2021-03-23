import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import Slider from "@material-ui/core/Slider";
import InputPriceContainer from "./InputPrice/InputPriceContainer";
import Button from "../../Button/Button";
import "./Slider.scss";

const StyledSlider = styled.div`
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function valuetext(value) {
  return `${value}°C`;
}

const SliderPrice = (props) => {
  const [value, setValue] = React.useState([10, 90]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <StyledSlider {...props}>
      <Title>Filter</Title>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <InputPriceContainer title="min"/>
      <InputPriceContainer title="max"/>
      <div className="filter__buttons_block">
        <Button value="Apply" mr="20px"  />
        <Button value="Reset" bg="white" cl="#A9A9A9" border="none"/>
      </div>
    </StyledSlider>
  );
};

export default SliderPrice;
