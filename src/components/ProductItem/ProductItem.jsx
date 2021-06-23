import { Rating } from '@material-ui/lab';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import  "./ProductItem.scss";

const ProductItem = (props) => {
    debugger
    const category = props.category || props.productData.categoryId ;
    const imgURL =`http://localhost:7000/products/${props.productData.category.category_name}/${props.productData.pictures[0].image_name}`;
    
    return (
        <>
            <Link className="product_link" to={`/category/${category}/product/${props.productData.id}`} >
                <div className="product_item">
                    <div className="product_item__img_block">
                        {props.productData? <img 
                        src={imgURL} 
                        alt="" className="product_item__img"/> : null}
                    </div>
                    <p className="product_item__title">{props.productData? props.productData.productName :'Product Title'}</p>
                    <p className="product_item__subtitle">{props.productData? props.productData.subhead : 'Space for a small product description'}</p>
                    <Rating className="product_item__rating" value={props.productData.rating} readOnly/>
                    <div className="product_item__price_block">
                        <span className="product_item__price">{props.productData.price} USD</span>
                        <Button  className="product_item__btn" value="Buy now"/>
                    </div>
                </div>
            </Link>
            
        </>
    )
};

export default ProductItem;
