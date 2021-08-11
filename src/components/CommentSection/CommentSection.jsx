import React from "react";
import Button from "../Button/Button";
import ItemCheckbox from "../Filters/Brands/BrandsItem/ItemCheckbox";
import Title from "../Filters/Title/Title";
import CommentItem from "./CommentItem/CommentItem";
import "./CommentSection.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addComment, AddCommentToServer } from "../../redux/BlogSlice";
import { toast } from "react-toastify";

const CommentSection = (props) => {
  const toastAdd = () => {
    toast.success(" Add product to cart !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({ mode: "onChange" });
  watch("name");
  watch("email");
  watch("message");

  const onSubmit = async (data) => {
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();
    const dateStr = `${y}-${m}-${d}`;

    data.role = false;
    data.createdAt = dateStr;
    data.blogItemId = props.blogItemId;
    clearInputs();
    const status = dispatch(AddCommentToServer(data));
    status.then((response) => {
      if (response.payload === 200) {
        dispatch(addComment(data));
        toastAdd();
      }
    });
  };

  const comments = props.data.map((element, index) => {
    return <CommentItem data={element} key={index} />;
  });

  let commentsBlock =
    props.data.length > 0 ? (
      <div className="comments_block">
        <Title>Comments</Title>
        {comments}
      </div>
    ) : null;

  const clearInputs = () => {
    setValue("name", "");
    setValue("message", "");
    setValue("email", "");
  };

  return (
    <>
      <section className="comment_section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title width="100%">Leave a reply</Title>
          <p className="comment_section__signin">
            Already have an account? <a href="/#">Sign in</a> to leave a reply.
          </p>
          <label className="comment_section__label">
            <div>
              <span>Name</span>
              {errors.name && (
                <span style={{ color: "red" }}>
                  {" "}
                  Поле не может быть пустым{" "}
                </span>
              )}
            </div>
            <input
              defaultValue=""
              className="comment_section__input"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
            />
          </label>
          <label className="comment_section__label">
            <div>
              <span>Email</span>
              {errors.email && (
                <span style={{ color: "red" }}> Введите корректный адрес </span>
              )}
            </div>
            <input
              defaultValue=""
              className="comment_section__input"
              type="text"
              placeholder="Email adress"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </label>
          <label className="comment_section__checkbox">
            <ItemCheckbox left="10px" />
            Save my name and email in this browser for a next time comment.
          </label>
          <label className="comment_section__label">
            <div>
              <span>Comment</span>
              {errors.message && (
                <span style={{ color: "red" }}>
                  {" "}
                  Поле не может быть пустым{" "}
                </span>
              )}
            </div>
            <textarea
              defaultValue=""
              className="comment_section__textarea"
              name="message"
              id=""
              {...register("message", { required: true, minLength: 3 })}
            ></textarea>
          </label>
          <Button type="submit" value="Send a comment" />
        </form>
        {commentsBlock}
      </section>
    </>
  );
};

export default CommentSection;
