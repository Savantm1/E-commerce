import React from "react";
import Title from "../Title/Title";
import "./CategoryMenu.scss";
import { Link } from "react-router-dom";

const CategoryMenu = (props) => {
  

  const linksElements = props.categories.map((element, index) => {
    if(props.bestSelling){
      return(
      <li key={index} className="category_menu__item">
        <Link className="category_menu__link" to={`/category/${element.id}/bestSelling`}>
        {element.category_name}
      </Link>
      </li>
      )
    } else if(props.bestFromFarmers){
      return(
        <li key={index} className="category_menu__item">
          <Link className="category_menu__link" to={`/category/${element.id}/bestFromFarmers`}>
          {element.category_name}
        </Link>
        </li>
        )
    } else {
      return(
         <li key={index} className="category_menu__item">
          <Link className="category_menu__link" to={`#`}>
          {element.category_name}
        </Link>
        </li>
      )
    }

    ;
  });

  return (
    <>
      <div className="category_menu">
        <Title>{props.categoryName}</Title>
        <ul className="category_menu__list">{linksElements}</ul>
      </div>
    </>
  );
};

export default CategoryMenu;
