import { Rating } from '@material-ui/lab';
import React from 'react';
import Button from '../../Button/Button';
import  "./ProductItemRow.scss";

const charactersData = [
    {character: "Freshness", value: "Fresh"},
    {character: "Farm", value: "Grocery Tarm Fields"},
    {character: "Delivery", value: "Europe"},
    {character: "Stock", value: "320pcs"}
];

const ParametersList = charactersData.map((element, index) => {
    return (
        <li className="parameters_list__item" key = {index}>
            <span className="parameters_list__character">{element.character}</span>
            <span className="parameters_list__value">{element.value}</span>
        </li>
    )
});

const ProductItemRow = (props) => {
    return (
        <>
            <div className="product_item_row">
                <div className="product_item_row__img_block">
                    {/* <img src="" alt="" className="product_item__img"/> */}
                </div>
                <div className="product_item_row__description_block">
                    <div className="product_item_row__description_column">
                        <p className="product_item_row__title">Product Title</p>
                        <p className="product_item_row__subtitle">Space for a small product description</p>
                        <Rating className="product_item_row__rating" value="4" readOnly/>
                        <ul className="parameters_list">
                        {ParametersList}
                        </ul>
                    </div>
                    <div className="product_item_row__price_block">
                        <span className="product_item_row__price">36.99 USD</span>
                        <span className="product_item_row__delivery">Free Shipping</span>
                        <span className="product_item_row__delivery_value">Delivery in 1 day</span>
                        <Button className="product_item_row__btn" value="Product Detail >"/>
                        <Button className="product_item_row__btn" bg="#F5F5F5" cl="#151515" border="none" value="♡ Add to wish list"/>
                    </div>
                </div>    
            </div>
            
        </>
    )
};

export default ProductItemRow;
