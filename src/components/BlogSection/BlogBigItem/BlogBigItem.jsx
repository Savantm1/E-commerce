import React from "react";
import "./BlogBigItem.scss";
import Title from "../../Filters/Title/Title";

const BlogBigItem = (props) => {
  return (
    <>
      <div className={ `${props.large}` ? "blog_large_item" : "blog_big_item"} >
        <img src={props.bgImg} alt="#" className="blog_big_item__bg" />
        <div className="blog_big_item__info_blog">
          <Title color="#fff" fontSize="22px">
            Our chef tips for a great and tasty dinner ready in 20 minutes
          </Title>
          <div className="autor_block">
            <img src={props.avatar} alt="avatar" className="autor_block__avatar"/>
            <span className="autor_block__autor_name">Author</span>
            <span className="autor_block__data">17.92.22</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBigItem;
