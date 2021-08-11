import React from "react";
import "./CommentItem.scss";
import avatar from "../../../assets/img/feedback-ava.png";
const CommentItem = (props) => {
  const imgURL = `http://localhost:7000/blog/`;
  return (
    <>
      <div className="comment_item">
        <div className="autor_block">
          <img
            src={props.data.avatar ? `${imgURL}${props.data.avatar}` : avatar}
            alt="avatar"
            className="autor_block__avatar"
          />
          <div className="autor_container">
            <p className="autor_block__autor_name">{props.data.name}</p>
            <span className="autor_block__data">{props.data.createdAt}</span>
          </div>
        </div>
        <p className="comment__text">{props.data.message}</p>
      </div>
    </>
  );
};

export default CommentItem;
