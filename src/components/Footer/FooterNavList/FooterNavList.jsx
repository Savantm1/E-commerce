import React from "react";
import { NavLink } from "react-bootstrap";
import styles from "./FooterNavList.module.scss";

const FooterNavList = (props) => {

    const listItems = props.list.map((element, index) => {
        return (
          <li className={styles.nav_list__item} key={index}>
            <NavLink className={styles.nav_list__link} to={element.url}>
              {element.name}
            </NavLink>
          </li>
        );
      })


  return (
    <div>
      <p className={styles.nav_title}>{props.title}</p>
      <ul className={styles.nav_list}>
        {listItems}
      </ul>
    </div>
  );
};

export default FooterNavList;
