import React from "react";
import { useState } from "react";
import { Route } from "react-router";
import BasketContainer from "../Basket/BasketContainer";
import BasketLogo from "./BasketLogo/BasketLogo";
import styles from "./Header.module.scss";
import Login from "./Login/Login";
import Logo from "./Logo/Logo";
import MenuContainer from "./Menu/MenuContainer";
import MobileContainer from "./MobileMenu/MobileContainer/MobileContainer";
import MobileMenu from "./MobileMenu/MobileMenu";
import Navigation from "./Navigation/Navigation";
import SearchBlock from "./SearchBlock/SearchBlock";

const Header = (props) => {
  let [basketToggler, changeBasketToggler] = useState(false);
  let [mobileToggler, changeMobileToggler] = useState(false);

  const MobileHandler = (evt) => {
    evt.preventDefault();
    changeMobileToggler(!mobileToggler);
  };
  const BasketHandler = (evt) => {
    evt.preventDefault();
    changeBasketToggler(!basketToggler);
  };

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
            <MobileMenu MobileHandler={MobileHandler} />
          </div>
          <BasketContainer
            basketToggler={basketToggler}
            BasketHandler={BasketHandler}
          />
          <MobileContainer
            mobileToggler={mobileToggler}
            MobileHandler={MobileHandler}
          />
        </div>

        <MenuContainer />

        <Route path="/category">
          <div className={styles.breadcrumb_view_selector}>

          </div>
        </Route>

        <Route path="/blog">
          <div className={styles.breadcrumb_view_selector}>

          </div>
          <h1 className={styles.category_page__title}>Blog Posts</h1>
        </Route>
        <Route path="/blog_item">
          <div className={styles.breadcrumb_view_selector}>

          </div>
        </Route>
      </header>
    </>
  );
};

export default Header;
