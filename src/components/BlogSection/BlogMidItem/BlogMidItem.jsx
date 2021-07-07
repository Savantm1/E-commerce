import React from "react";
import "./BlogMidItem.scss";
import Title from "../../Filters/Title/Title";
import Tag from "../../Footer/Tags/Tag/Tag";
import { Link } from "react-router-dom";

const BlogMidItem = (props) => {
  ;
  const imgURL = `http://localhost:7000/blog/`;

  return (
    <>
      <div className="blog_mid_item">
        <Link
          className="blog_mid_item__link"
          to={`/blog_item/${props.data.id}`}
        >
          <div className="blog_mid_item__block_img">
            <img
              src={`${imgURL}${props.data.images}` || props.postImg}
              alt="#"
              className="blog_mid_item__bg"
            />
          </div>
          <div className="blog_mid_item__info_blog">
            <Tag name={props.data.tag} green />
            <Title fontSize="1.5rem">{props.data.title}</Title>
            <div className="autor_block">
              <span className="autor_block__autor_name">
                {props.data.author}
              </span>
              <span className="autor_block__data">{props.data.date}</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogMidItem;
