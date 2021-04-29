import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import "./MobileContainer.scss";
import close from "./../../../../assets/icons/close.svg"

const MobileContainer = (props) => {

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

    const menuLinks = menuItemsData.map((elem,index)=> {
        return (
            <li className="mobile_menu__item"  onClick={props.MobileHandler} key={index}><Link className="mobile_menu__item__link" to="#">{elem}</Link></li>
        )
    })
    return (
        <>
            <div className={!props.mobileToggler ? "mobile_menu__container" : "mobile_menu__container mobile_menu__container--active"}>
                <div className="mobile_menu__row">
                    <div onClick={props.MobileHandler}>
                        <Logo/>
                    </div>
                    <img className="mobile_menu__close_img"  onClick={props.MobileHandler} src={close} alt="Close"/>

                </div>
                    <ul className="mobile_menu__list">
                        {menuLinks}
                    </ul>
            </div>  
        </>
    )
}

export default MobileContainer
