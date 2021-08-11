import React from "react";
import BlogSection from "../../components/BlogSection/BlogSection";
import CategorySectionRow from "../../components/CategorySectionRow/CategorySectionRow";
import CategorySectionRowProducts from "../../components/CategorySectionRowProducts/CategorySectionRowProducts";
import FeedbackSectionContainer from "../../components/FeedbackSection/FeedbackSectionContainer";
import "./MainPage.scss";

const MainPage = (props) => {
  return (
    <div className="mainpage">
      <CategorySectionRow categoryName="Blog" />

      <CategorySectionRowProducts
        categoryName="Best selling products"
        productsArray={props.bestSellingArray}
        bestSelling={true}
        countProducts={props.countProducts}
      />

      <CategorySectionRowProducts
        categoryName="Best from Farmers"
        productsArray={props.bestFromFarmersArray}
        bestFromFarmers={true}
        countProducts={props.countProducts}
      />
      <FeedbackSectionContainer />
      <BlogSection />
    </div>
  );
};

export default MainPage;
