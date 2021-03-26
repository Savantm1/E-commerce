import React from 'react'
import Title from '../Filters/Title/Title'
import BlogBigItem from './BlogBigItem/BlogBigItem'
import BlogMidItem from "./BlogMidItem/BlogMidItem"
import bigItemImg from "./../../assets/img/Rectangle 26.png"
import avatar from "./../../assets/img/Ellipse 3.png"
import postImg from "../../assets/img/Rectangle 26-2 s.png"
import './BlogSection.scss'

const BlogSection = (props) => {
    return (
        <>
            <div className="blog_section">
                <Title>Read out Blog posts</Title>
                <div className="blog_section__content_block">
                    <BlogBigItem bgImg={bigItemImg} avatar={avatar}/>
                    <BlogMidItem postImg={postImg}/>
                </div>
            </div>
        </>
    )
}

export default BlogSection
