import React from 'react'
import { Link } from 'react-router-dom'
import "./ViewSelector.scss"

const ViewSelector = (props) => {
    return (
        <div class="view_selector">
            <Link to="category/grid">
                <input  id="grid" type="radio" name="viewselector" checked value="Grid view"/>
                <label class="grid" for="grid"> Grid view </label>
            </Link>
            <Link to="category/inline">
                <input  id="inline" type="radio" name="viewselector" value="vist view"/>
                <label class="inline" for="inline"> List view </label>
            </Link>
            <div class="products_block">
                <div className="products_block__count">336</div>
                <p >Products</p>
            </div>
            
        </div>
    )
}

export default ViewSelector
