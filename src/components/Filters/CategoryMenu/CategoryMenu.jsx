import React from "react";
import { NavLink } from "react-bootstrap";
import Title from "../Title/Title";
import "./CategoryMenu.scss";

const linksData = [
  "Bakery",
  "Fruits and vegetables",
  "Meat and fish",
  "Drinks",
  "Kitchen",
];

const CategoryMenu = (props) => {
  const linksElements = linksData.map((element, index) => {
    return (
      <li key={index} className="category_menu__item">
        <NavLink className="category_menu__link" to="#">
          {element}
        </NavLink>
      </li>
    );
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
