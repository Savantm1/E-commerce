import React from "react";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem/MenuItem";

const menuItemsData = [
  "Bakery",
  "Fruit and vegetables",
  "Meat and fish",
  "Drinks",
  "Kitchen",
  "Special nutrition",
  "Baby",
  "Pharmacy",
];

const MenuItems = menuItemsData.map((element, index) => {
  return (
    <MenuItem title={element} key={index} />
    // <p key={index}>{element}</p>
  );
});

const Menu = (props) => {
  return <div className={styles.menu_container}>{MenuItems}</div>;
};

export default Menu;
