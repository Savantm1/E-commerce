import React from "react";
import { useState } from "react";
import { Route } from "react-router";
import Basket from "../Basket/Basket";
import BasketLogo from "./BasketLogo/BasketLogo";
import BreadcrumbWithUrl from "./../BreadcrumbsContainer/BreadcrumbsContainer";
import BreadcrumbsContainer from ".././BreadcrumbsContainer/BreadcrumbsContainer";
import styles from "./Header.module.scss";
import Login from "./Login/Login";
import Logo from "./Logo/Logo";
import MenuContainer from "./Menu/MenuContainer";
import MobileContainer from "./MobileMenu/MobileContainer/MobileContainer";
import MobileMenu from "./MobileMenu/MobileMenu";
import Navigation from "./Navigation/Navigation";
import SearchBlock from "./SearchBlock/SearchBlock";


const Header = (props) => {

  let [basketToggler,changeBasketToggler] = useState(false);
  let [mobileToggler,changeMobileToggler] = useState(false);
  
  const MobileHandler = (evt) => {
    evt.preventDefault();
    changeMobileToggler(!mobileToggler)
  }
  const BasketHandler = (evt) => {
    evt.preventDefault();
    changeBasketToggler(!basketToggler)
  }

  return (
    <>
      <header className={styles.header__container}>
        <div className={styles.navigation__container}>
          <Navigation />
        </div>

        <div className={styles.middle_row}>
          <Logo />
          <SearchBlock />
          <div className={styles.person_block}>
            <Login />
            <BasketLogo BasketHandler={BasketHandler} />
            <MobileMenu MobileHandler={MobileHandler}/>
          </div>
              <Basket basketToggler={basketToggler} BasketHandler={BasketHandler}/> 
              <MobileContainer mobileToggler={mobileToggler} MobileHandler={MobileHandler}/> 
        </div>

        <MenuContainer />

        <Route path="/product">
          <div className={styles.breadcrumb_view_selector}>
            <BreadcrumbsContainer />
          </div>
        </Route>

        <Route path="/blog">
          <div className={styles.breadcrumb_view_selector}>
            <BreadcrumbWithUrl />
          </div>
          <h1 className={styles.category_page__title}>Fruit and vegetables</h1>
        </Route>
        <Route path="/blog_item">
          <div className={styles.breadcrumb_view_selector}>
            <BreadcrumbsContainer />
          </div>
        </Route>
      </header>
    </>
  );
};

export default Header;
