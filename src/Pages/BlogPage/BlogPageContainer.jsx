import React, { useEffect } from "react";
import BlogPage from "./BlogPage";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { getBlogs } from "../../redux/BlogSlice";

const BlogPageContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const blogArr = useSelector((state) => state.blog.blog);

  return <BlogPage blogArr={blogArr} />;
};

let WithUrlDataBlogPage = withRouter(BlogPageContainer);

export default WithUrlDataBlogPage;
