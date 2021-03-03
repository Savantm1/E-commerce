import React from "react";
import styles from "./Header.module.scss";
import Navigation from "./Navigation/Navigation";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;
