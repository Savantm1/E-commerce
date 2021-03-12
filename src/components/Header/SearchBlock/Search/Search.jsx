import React from 'react'
import styles from './Search.module.scss'
import search from './../../../../assets/icons/ic-actions-search.svg'

const Search = (props) => {
    return (
        <>
        <input 
            className={styles.search} 
            type="text"
            placeholder="Search Product, categories..."
        />
        <img className={styles.search_img} src={search} alt="search"/>
        </>
    )
}
export default Search