import React, { useEffect } from 'react';
import BlogItemPage from "./BlogItemPage";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { getBlogs } from '../../redux/BlogSlice';

const BlogItemPageContainer = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            getBlogs()
        )
    },[dispatch])

    const blogArr = useSelector((state) => state.blog.blog);

    return (
        <div>
            <BlogItemPage blogArr={blogArr}/>
        </div>
    )
}

let WithUrlDataBlogItemPage= withRouter(BlogItemPageContainer)

export default WithUrlDataBlogItemPage;
