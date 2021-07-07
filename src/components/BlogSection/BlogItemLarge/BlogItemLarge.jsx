import React from "react";
import Title from "../../Filters/Title/Title";
import "./BlogItemLarge.scss";
import image from "./../../../assets/img/Large.png";
import { Link } from "react-router-dom";

const BlogItemLarge = (props) => {
  const imgURL = `http://localhost:7000/blog/`;

  return (
    <>
      <Link to="/blog_item">
        <div className="blog_item_large">
          <img
            src={`${imgURL}${props.data.images}` || { image }}
            alt=""
            className="blog_item_large__img"
          />
          <div className="blog_item_large__shadow">
            <div className="blog_item_large__info_block">
              <ul className="blog_item_large__info_list">
                <li className="blog_item_large__list_item">
                  Date:
                  <span className="blog_item_large__list_item__value">
                    {props.data.date}
                  </span>
                </li>
                <li className="blog_item_large__list_item">
                  Category:
                  <span className="blog_item_large__list_item__value">
                    Dinner
                  </span>
                </li>
                <li className="blog_item_large__list_item">
                  Author:
                  <span className="blog_item_large__list_item__value">
                    {props.data.author}
                  </span>
                </li>
              </ul>
              <Title fontSize="2rem" max-width="520px" color="white">
                {props.data.title}
              </Title>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogItemLarge;
