import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
const Logo = () => {
  return (
    <Link to="/">
      <p className={styles.logo}>Freshnesecom</p>
    </Link>
  );
};

export default Logo;
