import React from "react";
import Title from "../../Filters/Title/Title";
import "./BlogItemLarge.scss";
import image from "./../../../assets/img/Large.png";

const BlogItemLarge = (props) => {
  return (
    <>
      <div className="blog_item_large">
        <img src={image} alt="" className="blog_item_large__img" />
        <div className="blog_item_large__info_blog">
          <ul className="blog_item_large__info_list">
            <li className="blog_item_large__list_item">
              Date:
              <span className="blog_item_large__list_item__value">
                15.04.2021
              </span>
            </li>
            <li className="blog_item_large__list_item">
              Category:
              <span className="blog_item_large__list_item__value">Dinner</span>
            </li>
            <li className="blog_item_large__list_item">
              Author:
              <span className="blog_item_large__list_item__value">Admin</span>
            </li>
          </ul>
          <Title fontSize="32px" width="520px" color="white">
            Space for your heading, can be larger so dont worry - large heading
            looks better
          </Title>
        </div>
      </div>
    </>
  );
};

export default BlogItemLarge;
