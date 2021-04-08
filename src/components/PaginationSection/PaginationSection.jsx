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
    let paginationItems =  pages.map(p => { 
        return <li class="pagination_item">{p}</li>
    })

    return (
        <div class="pagination_section">
            <div class="pagination_block">
                <p >Pages:</p>
                <ul className="pagination_list">
                    {paginationItems}
                </ul>
            </div>
            <Button value="Show more ∨"/>
            <div class="products_block">
                <div className="products_block__count">336</div>
                <p >Products</p>
            </div>
        </div>
    )
}

export default PaginationSection
