import React from "react";

import BlogSection from "../../components/BlogSection/BlogSection";
import CategorySectionRow from "../../components/CategorySectionRow/CategorySectionRow";
import CategorySectionRowProducts from "../../components/CategorySectionRowProducts/CategorySectionRowProducts";
import FeedbackSection from "../../components/FeedbackSection/FeedbackSection";
import "./MainPage.scss"

const MainPage = (props) => {
  return (
    <div className="mainpage"> 
      <CategorySectionRow categoryName="Recipes" />
      <CategorySectionRowProducts categoryName="Best selling products" />
      <CategorySectionRowProducts categoryName="Best from Farmers" />
      <FeedbackSection />
      <BlogSection />
    </div>
  );
};

export default MainPage;
