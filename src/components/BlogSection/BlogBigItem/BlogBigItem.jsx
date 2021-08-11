import React from "react";
import "./BlogBigItem.scss";
import Title from "../../Filters/Title/Title";
import { Link } from "react-router-dom";

const BlogBigItem = (props) => {
  const imgURL = `http://localhost:7000/blog/`;

  return (
    <>
      <Link className="blog_big_item__link" to={`/blog_item/${props.data.id}`}>
        <div
          className={
            `${props.large}` === "true" ? "blog_large_item" : "blog_big_item"
          }
        >
          <img
            src={`${imgURL}${props.data.images}` || props.bgImg}
            alt="#"
            className="blog_big_item__bg"
          />
          <div className="blog_big_item__info_blog">
            <Title color="#fff" fontSize="1.5rem">
              {props.data.title}
            </Title>
            <div className="autor_block">
              <img
                src={`${imgURL}${props.data.avatar}`}
                alt="avatar"
                className="autor_block__avatar"
              />
              <span className="autor_block__autor_name">
                {props.data.author}
              </span>
              <span className="autor_block__data">{props.data.date}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogBigItem;
