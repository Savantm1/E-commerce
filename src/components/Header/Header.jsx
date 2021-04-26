import React from "react";
import { useState } from "react";
import { Route } from "react-router";
import Basket from "../Basket/Basket";
import BasketLogo from "./BasketLogo/BasketLogo";
import BreadcrumbsContainer from "./BreadcrumbsContainer/BreadcrumbsContainer";
import styles from "./Header.module.scss";
import Login from "./Login/Login";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import MobileMenu from "./MobileMenu/MobileMenu";
import Navigation from "./Navigation/Navigation";
import SearchBlock from "./SearchBlock/SearchBlock";
import ViewSelector from "./ViewSelector/ViewSelector";

const Header = (props) => {

  let [basketToggler,changeBasketToggler] = useState(false);

  const BasketHandler = (evt) => {
    evt.preventDefault();
    changeBasketToggler(!basketToggler)
  }

  return (
    <>
      <header className={styles.header__container}>
        <Navigation />

        <div className={styles.middle_row}>
          <Logo />
          <SearchBlock />
          <div className={styles.person_block}>
            <MobileMenu/>
            <Login />
            <BasketLogo BasketHandler={BasketHandler} />
          </div>
          {basketToggler? <Basket BasketHandler={BasketHandler}/> : null}
        </div>

        <Menu />

        <Route path="/category">
          <h1 className={styles.category_page__title}>Fruit and vegetables</h1>
          <div className={styles.breadcrumb_view_selector}>
            <BreadcrumbsContainer />
            <ViewSelector changeView={props.changeView} />
          </div>
        </Route>

        <Route path="/product">
          <div className={styles.breadcrumb_view_selector}>
            <BreadcrumbsContainer />
          </div>
        </Route>

        <Route path="/blog">
          <div className={styles.breadcrumb_view_selector}>
            <BreadcrumbsContainer />
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
