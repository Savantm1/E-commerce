import React from "react";
import "./BlogMidItem.scss";
import Title from "../../Filters/Title/Title";
import Tag from "../../Footer/Tags/Tag/Tag";

const BlogMidItem = (props) => {
  return (
    <>
      <div className="blog_mid_item">
        <div className="blog_mid_item__block_img">
            <img src={props.postImg} alt="#" className="blog_mid_item__bg" />
        </div>
        <div className="blog_mid_item__info_blog">
          <Tag name="Tag" green/>
          <Title fontSize="22px">
            Our chef tips for a great and tasty dinner ready in 20 minutes
          </Title>
          <div className="autor_block">
            <span className="autor_block__autor_name">Autor</span>
            <span className="autor_block__data">17.92.22</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMidItem;
