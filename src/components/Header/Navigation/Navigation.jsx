import React from 'react'
import styles from './Navigation.module.scss'
import {NavLink} from "react-router-dom"

let navItemsArr = ['Blog', 'About Us', 'Careers']

let  NavItems = navItemsArr.map(element => {
  return (
    <li className={styles.info_list__item}>
      <NavLink className={styles.info_list__link} to={`/${element}`}>{element}</NavLink>
    </li>)    
})

const Navigation = (props) => {
  
  return (
    <>
      <div className={styles.navigation}>
        <ul className={styles.info_list}>
          <li className={styles.info_list__item}>
            <NavLink className={styles.info_list__link} to="/chat_with_us" >
              Chat with us
            </NavLink>
          </li>
          <li className={styles.info_list__item}>
              <a className={styles.info_list__link} href="tel:+79771242427" >+79771242427</a>
          </li>
          <li className={styles.info_list__item}>
              <a className={styles.info_list__link} href="mailto:info@freshnesecom.com" >info@freshnesecom.com</a>
          </li>
        </ul>

        <ul className={styles.info_list}>
          {NavItems}
        </ul>
      </div>
    </>
  )
}  

export default Navigation