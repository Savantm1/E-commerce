import React from 'react';
import { Link } from 'react-router-dom';
import menu from "./../../../assets/icons/menu.svg";
import "./MobileMenu.scss";
const MobileMenu = (props) => {

    const menuItemsData = [
        "Bakery",
        "Fruit and vegetables",
        "Meat and fish",
        "Drinks",
        "Kitchen",
        "Special nutrition",
        "Baby",
        "Pharmacy",
      ];

    return (
        <>
        <Link className="mobile_menu__link" to="#">
            <img className="mobile_menu" src={menu} alt="menu"/>
        </Link>
            
        </>
    )
}

export default MobileMenu
