import React from "react";
import Navigation from "../Header/Navigation/Navigation";
import styles from "./Footer.module.scss";
import FooterNavList from "./FooterNavList/FooterNavList";
import Tags from "./Tags/Tags";

const DataLists = [
  {
    nameList: "Get in touch",
    list: [
      { name: "About Us", url: "/about_us" },
      { name: "Careers", url: "/careers" },
      { name: "Press Releases", url: "/press_releases" },
      { name: "Blog", url: "/blog" },
    ],
  },
  {
    nameList: "Connections",
    list: [
      { name: "Facebook", url: "/facebook" },
      { name: "Twitter", url: "/Twitter" },
      { name: "Instagram", url: "/Instagram" },
      { name: "YouTube", url: "/youtube" },
    ],
  },
  {
    nameList: "Earnings",
    list: [
      { name: "Become an Affiliate", url: "/become_an_affiliate" },
      { name: "Advertise your product", url: "/advertise_your_product" },
      { name: "Sell on Market", url: "/sell_on_market" },
    ],
  },
  {
    nameList: "Account",
    list: [
      { name: "Your account", url: "/account" },
      { name: "Returns center", url: "/returns_center" },
      { name: "100 % purchase protection", url: "/protection" },
      { name: "Chat with us", url: "/chat_with_us" },
      { name: "Help", url: "/help" },
    ],
  },
];

const lists = DataLists.map((element, index) => {
  return (
    <FooterNavList title={element.nameList} key={index} list={element.list} />
  );
});

const Footer = (props) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.navigation_lists__container}>
            <section className={styles.navigation_lists}>{lists}</section>
          </div>
          <div className={styles.tags__container}>
            <Tags />
          </div>
          <div className={styles.navigation_container}>
            <Navigation />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
