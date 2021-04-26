import React from "react";
import "./BlogBigItem.scss";
import Title from "../../Filters/Title/Title";
import { Link } from "react-router-dom";

const BlogBigItem = (props) => {
  return (
    <>
      <Link className="blog_big_item__link" to="/blog_item">
        <div className={`${props.large}`==="true" ? "blog_large_item" : "blog_big_item"}>
          <img src={props.bgImg} alt="#" className="blog_big_item__bg" />
          <div className="blog_big_item__info_blog">
            <Title color="#fff" fontSize="1.5rem">
              Our chef tips for a great and tasty dinner ready in 20 minutes
            </Title>
            <div className="autor_block">
              <img
                src={props.avatar}
                alt="avatar"
                className="autor_block__avatar"
              />
              <span className="autor_block__autor_name">Author</span>
              <span className="autor_block__data">17.92.22</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogBigItem;
