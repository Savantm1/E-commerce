import { Rating } from '@material-ui/lab';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import  "./ProductItem.scss";

const ProductItem = (props) => {
    return (
        <>
            <Link to="/product">
                <div className="product_item">
                    <div className="product_item__img_block">
                        {/* <img src="" alt="" className="product_item__img"/> */}
                    </div>
                    <p className="product_item__title">Product Title</p>
                    <p className="product_item__subtitle">Space for a small product description</p>
                    <Rating className="product_item__rating" value="4" readOnly/>
                    <div className="product_item__price_block">
                        <span className="product_item__price">36.99 USD</span>
                        <Button  className="product_item__btn" value="Buy now"/>
                    </div>
                </div>
            </Link>
            
        </>
    )
};

export default ProductItem;
