import React from "react";
import { NavLink } from "react-bootstrap";
import styles from "./Logo.module.scss";
const Logo = () => {
  return (
    <NavLink to="/">
      <p className={styles.logo}>Freshnesecom</p>
    </NavLink>
  );
};

export default Logo;
