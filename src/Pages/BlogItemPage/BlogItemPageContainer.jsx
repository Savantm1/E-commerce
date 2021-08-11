import React, { useEffect } from "react";
import BlogItemPage from "./BlogItemPage";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { getBlogItem, getBlogs } from "../../redux/BlogSlice";

const BlogItemPageContainer = (props) => {
  const item = props.match.params.itemId;
  const blogArr = useSelector((state) => state.blog.blog);
  const itemData = useSelector((state) => state.blog.blogItem);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
    dispatch(getBlogItem(item));
  }, [dispatch, item]);

  return (
    <div>
      <BlogItemPage blogArr={blogArr} itemData={itemData} />
    </div>
  );
};

let WithUrlDataBlogItemPage = withRouter(BlogItemPageContainer);

export default WithUrlDataBlogItemPage;
