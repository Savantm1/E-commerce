import React from "react";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem/MenuItem";

const Menu = (props) => {

  const MenuItems = props.categories.map((element, index) => {
    return (
      <MenuItem title={element.category_name} id={element.id} key={index} />
    );
  });

  return <div className={styles.menu_container}>{MenuItems}</div>;
};

export default Menu;
