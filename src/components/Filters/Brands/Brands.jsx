import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import BrandsItem from "./BrandsItem/BrandsItem";

const BrandsData = [
  { itemName: "First", count: "12" },
  { itemName: "Secont", count: "112" },
  { itemName: "Firtd", count: "122" },
  { itemName: "Fourth", count: "123" },
];

const BrandsItems = BrandsData.map((element, index) => {
  return (
    <BrandsItem
      key={index}
      itemName={element.itemName}
    />
  );
});

const StyledBrands = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 48px;
`;

const Brands = (props = BrandsData) => {
  return (
    <StyledBrands {...props}>
      <Title>Brands</Title>
      <BrandsItem itemName="BrandsItem" />
      {BrandsItems}
    </StyledBrands>
  );
};

export default Brands;
