import React from "react";
import "./CommentItem.scss";
import avatar from '../../../assets/img/feedback-ava.png'
const CommentItem = (props) => {
  return (
    <>
      <div className="comment_item">
        <div className="autor_block">
          <img
            src={avatar}
            alt="avatar"
            className="autor_block__avatar"
          />
          <div className="autor_container">
            <p className="autor_block__autor_name">Author <span className="autor_status">Admin</span></p>
            <span className="autor_block__data">17.02.22</span>
          </div>
        </div>
        <p className="comment__text">
          Hi everyone, we have been working hard with the team bringing a new
          articles. It has passed a few months till we released it in case of
          traveling and shooting, hopefully you’ll love it.
        </p>
      </div>
    </>
  );
};

export default CommentItem;
