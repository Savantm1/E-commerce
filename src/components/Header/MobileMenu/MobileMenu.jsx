import React from 'react';
import { Link } from 'react-router-dom';
import menu from "./../../../assets/icons/menu.svg";
import "./MobileMenu.scss";
const MobileMenu = (props) => {

    return (
        <>
        <Link className="mobile_menu__link" onClick={props.MobileHandler} to="#">
            <img className="mobile_menu" src={menu} alt="menu"/>
        </Link>
            
        </>
    )
}

export default MobileMenu
