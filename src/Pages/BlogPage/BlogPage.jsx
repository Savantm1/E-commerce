import React from 'react'
import BlogBigItem from '../../components/BlogSection/BlogBigItem/BlogBigItem'
import './BlogPage.scss'
import bigItemImg from "./../../assets/img/Rectangle 26.png"
import avatar from "./../../assets/img/Ellipse 3.png"
import CategoryMenu from '../../components/Filters/CategoryMenu/CategoryMenu'
import BlogMidItem from '../../components/BlogSection/BlogMidItem/BlogMidItem'
import postImg from "../../assets/img/Rectangle 26-2 s.png";
import PaginationSection from '../../components/PaginationSection/PaginationSection'
import Subscribe from '../../components/Filters/Subscribe/Subscribe'

const BlogPage = (props) => {
    return (
        <>
            <div className="blog_page">
                <div className="blog_page__main_row">
                    <BlogBigItem large="true" bgImg={bigItemImg} avatar={avatar}/>
                    <BlogBigItem bgImg={bigItemImg} avatar={avatar}/>     
                </div>
                <div className="blog_page__section">
                    <aside>
                        <CategoryMenu  categoryName="Archives"/>
                        <CategoryMenu categoryName="Category"/>
                        <Subscribe/>
                    </aside>
                    <div className="blog_page_items_block">
                        <BlogMidItem postImg={postImg}/>
                        <BlogMidItem postImg={postImg}/>
                        <BlogMidItem postImg={postImg}/>
                        <BlogMidItem postImg={postImg}/>
                        <BlogMidItem postImg={postImg}/>
                        <BlogMidItem postImg={postImg}/>
                        <BlogMidItem postImg={postImg}/>
                        <BlogMidItem postImg={postImg}/>
                        <BlogMidItem postImg={postImg}/>
                    </div>
                </div>
                <PaginationSection />
            </div>
        </>
    )
}

export default BlogPage
