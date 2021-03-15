import React from 'react'
import styles from './MenuItem.module.scss'
import arrow from  '../../../../assets/icons/ic-chevron-down.svg'

const MenuItem = (props) => {
    return (
        <div className={styles.item}>
            <p className={styles.title}>{props.title}</p>
            <img className={styles.arrow} src={arrow} alt="arrow"/>
        </div>
    )
}

export default MenuItem ;