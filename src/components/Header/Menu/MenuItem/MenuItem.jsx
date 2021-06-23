import React from "react";
import styles from "./MenuItem.module.scss";
import arrow from "../../../../assets/icons/ic-chevron-down.svg";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <Link className={styles.link} to={`/category/${props.id}`}>
      <div className={styles.item}>
        <p className={styles.title}>{props.title}</p>
        <img className={styles.arrow} src={arrow} alt="arrow" />
      </div>
    </Link>
  );
};

export default MenuItem;
