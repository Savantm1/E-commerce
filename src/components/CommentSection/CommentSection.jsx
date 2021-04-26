import React from "react";
// import BlogMidItem from "../BlogSection/BlogMidItem/BlogMidItem";
import Button from "../Button/Button";
import ItemCheckbox from "../Filters/Brands/BrandsItem/ItemCheckbox";
import Title from "../Filters/Title/Title";
import CommentItem from "./CommentItem/CommentItem";
import "./CommentSection.scss";

const CommentSection = (props) => {
  return (
    <>
      <section className="comment_section">
        <Title width="100%">Leave a reply</Title>
        <p className="comment_section__signin">
          Already have an account? <a href="#">Sign in</a> to leave a reply.
        </p>
        <label className="comment_section__label" >
          Name
          <input className="comment_section__input" type="text" name="name" placeholder="Name" />
        </label>
        <label className="comment_section__label">
          Email
          <input className="comment_section__input" type="text" name="email" placeholder="Email adress" />
        </label>
        <label className="comment_section__checkbox">
          <ItemCheckbox left='10px' />
          Save my name and email in this browser for a next time comment.
        </label>
        <label className="comment_section__label">
          Comment
          <textarea className="comment_section__textarea"  name="message" id=""></textarea>
        </label>

        <Button value="Send a comment"/>
        <div className="comments_block">
            <Title>Comments</Title>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
        </div>
      </section>
    </>
  );
};

export default CommentSection;
