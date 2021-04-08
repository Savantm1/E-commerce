import React from "react";
import { Route } from "react-router";
import Title from "../Filters/Title/Title";
import Basket from "./Basket/Basket";
import BreadcrumbsContainer from "./BreadcrumbsContainer/BreadcrumbsContainer";
import styles from "./Header.module.scss";
import Login from "./Login/Login";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Navigation from "./Navigation/Navigation";
import SearchBlock from "./SearchBlock/SearchBlock";
import ViewSelector from "./ViewSelector/ViewSelector";

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
          <Route path="/category">
            <h1 className={styles.category_page__title}>Fruit and vegetables</h1> 
          </Route>
          <Route path="/category">
            <div className={styles.breadcrumb_view_selector}>
              <BreadcrumbsContainer/>
              <ViewSelector/>
            </div>
          </Route>
          
      </header>
    </>
  );
};

export default Header;
