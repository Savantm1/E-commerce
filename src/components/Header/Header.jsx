import React from "react";
import Basket from "./Basket/Basket";
import BreadcrumbsContainer from "./BreadcrumbsContainer/BreadcrumbsContainer";
import styles from "./Header.module.scss";
import Login from "./Login/Login";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Navigation from "./Navigation/Navigation";
import SearchBlock from "./SearchBlock/SearchBlock";

const Header = (props) => {
  return (
    <>
      <header className={styles.header__container}>
          <Navigation /> 
          <div className={styles.middle_row}>
            <Logo/>
            <SearchBlock/>
            <div className={styles.person_block}>
              <Login/>
              <Basket/>
            </div>
          </div>   
          <Menu/>
          <BreadcrumbsContainer/>
      </header>
    </>
  );
};

export default Header;
