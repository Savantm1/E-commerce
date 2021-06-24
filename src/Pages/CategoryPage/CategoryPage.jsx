import React from "react";
import Filters from "../../components/Filters/Filters";
import PaginationSection from "../../components/PaginationSection/PaginationSection";
import ProductItemRow from "../../components/ProductItem/ProductItemRow/ProductItemRow";
import ProductItem from "../../components/ProductItem/ProductItem";
import "./CategoryPage.scss";
import ViewSelector from "../../components/ViewSelector/ViewSelector";

const CategoryPage = (props) => {
  ;
   const category = props.category;
   let subCategory = props.bestSelling? "Best Selling" : "Best From Farmers"; 
   if(!props.bestSelling && !props.bestFromFarmers) {subCategory= ""};
   const productsItemRows = props.categoryProductsData.map(
      (element, index) => {
        return <ProductItemRow 
          key={index} 
          productData={element}
          category={category}
        />;
      }
    );
    const productsItems = props.categoryProductsData.map(
      (element, index) => {
        return <ProductItem 
          key={index} 
          productData={element}
          category={category} 
        />;
      }
    );
  return (
    <>
      <div className="breadcrumb_view_selector">
      <h1 className="category_page__title">{category} {subCategory}</h1>
        <ViewSelector changeView={props.changeView} view ={props.view} count={props.count}/>
      </div>
      <div className="category_page">
        <Filters bestSelling = {props.bestSelling} bestFromFarmers={props.bestFromFarmers}/>
        <div className="category_page__container">
          {props.view ? (
            <div>
               { productsItemRows } 
              </div>
          ) : (
            <div className="category_grid">
               { productsItems } 
               </div>
          )}
        </div>
      </div>
      <PaginationSection  
        count={props.count}
        changePageFunc={props.changePageFunc}
        currentPage={props.currentPage}
      />
    </>
  );
};

export default CategoryPage;
