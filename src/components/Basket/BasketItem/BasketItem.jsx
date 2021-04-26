import { Rating } from '@material-ui/lab'
import React from 'react'
// import { Link } from 'react-router-dom'
import Title from '../../Filters/Title/Title'
import "./BasketItem.scss";
import close from "./../../../assets/icons/ic-actions-close-simple.svg";

const BasketItem = (props) => {
    return (
        <>
        <div className="basket_item">
            <div className="basket_item__info_block">
                <div className="basket_item__img_block">
                    <img src="" alt="" className="basket-item__img"/>
                </div>
                <div className="basket_item__params_block">
                    <Title margin="0px">Product title</Title>
                    <p className="basket_item__parameter">Farm: <span>Tharamist Farm</span></p>
                    <p className="basket_item__parameter">Freshness: <span>1 day old</span></p>
                </div>
            </div>
            <div className="buttons_block">
            <p className="add_wish">
              <svg
                className="heart"
                width="20"
                height="20"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.1835 8.15008C23.7748 6.55878 25.9331 5.66479 28.1835 5.66479C30.4339 5.66479 32.5922 6.55878 34.1835 8.15008C35.7748 9.74137 36.6688 11.8996 36.6688 14.1501C36.6688 16.4005 35.7748 18.5588 34.1835 20.1501L32.0002 22.3334L20.0002 34.3334L8.00016 22.3334L5.81682 20.1501C4.22553 18.5588 3.33154 16.4005 3.33154 14.1501C3.33154 11.8996 4.22553 9.74137 5.81682 8.15008C7.40812 6.55878 9.56639 5.66479 11.8168 5.66479C14.0673 5.66479 16.2255 6.55878 17.8168 8.15008L20.0002 10.3334L22.1835 8.15008Z"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Wishlist
            </p>
            <p className="compare">
              <svg
                className="compare_svg"
                width="20"
                height="20"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 3.3335H9.16659C7.32564 3.3335 5.83325 4.82588 5.83325 6.66683V13.3335C5.83325 15.1744 7.32564 16.6668 9.16659 16.6668H15.8333C17.6742 16.6668 19.1666 15.1744 19.1666 13.3335V6.66683C19.1666 4.82588 17.6742 3.3335 15.8333 3.3335Z"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8333 23.3335H9.16659C7.32564 23.3335 5.83325 24.8259 5.83325 26.6668V33.3335C5.83325 35.1744 7.32564 36.6668 9.16659 36.6668H15.8333C17.6742 36.6668 19.1666 35.1744 19.1666 33.3335V26.6668C19.1666 24.8259 17.6742 23.3335 15.8333 23.3335Z"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.1665 26.667H24.1665"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.8332 33.3335H24.1665"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.8332 13.3335H24.1665"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.1665 6.66699H24.1665"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Compare
            </p>
            <p className="remove">
              <img className="remove_img" src={close} alt='close'/>
              Remove
            </p>
            </div>
            <div className="price_block">
                <Rating value={4}/>
                <span className="price">36.99 USD</span>
            </div>
            <input className="product_input" type="number" />
        </div>    
        </>
    )
}

export default BasketItem
