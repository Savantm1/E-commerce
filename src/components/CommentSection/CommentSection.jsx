import React from "react";
import Button from "../Button/Button";
import ItemCheckbox from "../Filters/Brands/BrandsItem/ItemCheckbox";
import Title from "../Filters/Title/Title";
import CommentItem from "./CommentItem/CommentItem";

const CommentSection = (props) => {
  return (
    <>
      <section className="comment_section">
        <Title>Leave a reply</Title>
        <p className="comment_section_signin">
          Already have an account? <a href="#">Sign in</a> to leave a reply.
        </p>
        <label>
          Name
          <input type="text" name="name" placeholder="Name" />
        </label>
        <label>
          Email
          <input type="text" name="email" placeholder="Email adress" />
        </label>
        <label>
          <ItemCheckbox />
          Save my name and email in this browser for a next time comment.
        </label>
        <label>
          Comment
          <textarea name="" id=""></textarea>
        </label>

        <Button value="Send a comment"/>
        <div className="comments_block">
            <Title>Comments</Title>
            <CommentItem/>
        </div>
      </section>
    </>
  );
};

export default CommentSection;
