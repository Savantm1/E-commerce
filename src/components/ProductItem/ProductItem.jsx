import { Rating } from "@material-ui/lab";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ProductItem.scss";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";

const ProductItem = (props) => {
  const toastAdd = () => {
    toast.success(" Product add to cart !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const category = props.category || props.productData.categoryId;
  const imgURL = `http://localhost:7000/products/${props.productData.category.category_name}/${props.productData.pictures[0].image_name}`;

  const dispatch = useDispatch();
  const productDataForCart = {
    productName: props.productData.productName,
    count: 1,
    rating: props.productData.rating,
    price: props.productData.price,
    subtitle: props.productData.subhead,
    img: imgURL,
    id: props.productData.id,
  };

  const addToCartFunc = (evt) => {
    evt.preventDefault();
    dispatch(addProductToCart(productDataForCart));
    toastAdd();
  };

  return (
    <>
      <Link
        className="product_link"
        to={`/category/${category}/product/${props.productData.id}`}
      >
        <div className="product_item">
          <div className="product_item__img_block">
            {props.productData ? (
              <img src={imgURL} alt="" className="product_item__img" />
            ) : null}
          </div>
          <p className="product_item__title">
            {props.productData
              ? props.productData.productName
              : "Product Title"}
          </p>
          <p className="product_item__subtitle">
            {props.productData
              ? props.productData.subhead
              : "Space for a small product description"}
          </p>
          <Rating
            className="product_item__rating"
            value={props.productData.rating}
            readOnly
          />
          <div className="product_item__price_block">
            <span className="product_item__price">
              {props.productData.price} USD
            </span>
            <Button
              className="product_item__btn"
              value="Buy now"
              onClick={addToCartFunc}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
