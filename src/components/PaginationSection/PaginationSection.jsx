import React from 'react'
import Button from '../Button/Button'
import "./PaginationSection.scss"

const PaginationSection = (props) => {

    let totalUsersCount = 40
    let  pageSize = 10
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
      pages.push(i);
    }
    let paginationItems =  pages.map((p,i) => { 
        return <li key={i} className="pagination_item">{p}</li>
    })

    return (
        <div className="pagination_section">
            <div className="pagination_block">
                <p >Pages:</p>
                <ul className="pagination_list">
                    {paginationItems}
                </ul>
            </div>
            <Button value="Show more ∨"/>
            <div className="products_block">
                <div className="products_block__count">{props.count}</div>
                <p >Products</p>
            </div>
        </div>
    )
}

export default PaginationSection
