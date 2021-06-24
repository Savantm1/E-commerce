import React from 'react'
import BlogBigItem from '../../components/BlogSection/BlogBigItem/BlogBigItem'
import './BlogPage.scss'
import bigItemImg from "./../../assets/img/Rectangle 26.png"
import avatar from "./../../assets/img/Ellipse 3.png"
import BlogMidItem from '../../components/BlogSection/BlogMidItem/BlogMidItem'
import postImg from "../../assets/img/Rectangle 26-2 s.png";
import PaginationSection from '../../components/PaginationSection/PaginationSection'
import Subscribe from '../../components/Filters/Subscribe/Subscribe'

const BlogPage = (props) => {
debugger
    const mainRowBlogItems = props.blogArr.map((element,index)=>{
            if(index < 2) {
                return(
                    <BlogBigItem large="true" key={index} data={element} bgImg={bigItemImg} avatar={avatar}/>
                    )
            }
    })

    const middleBlogItems = props.blogArr.map((element,index) => {
        if(index >=2) {
            return(
                <BlogMidItem key={index} postImg={postImg} data={element} />
                )
        }
    })

    return (
        <>
            <div className="blog_page">
                <div className="blog_page__main_row">
                    {mainRowBlogItems}
                </div>
                <div className="blog_page__section">
                    <aside>
                        {/* <CategoryMenu  categoryName="Archives"/> */}
                        {/* <CategoryMenu categoryName="Category"/> */}
                        <Subscribe/>
                    </aside>
                    <div className="blog_page_items_block">
                        {middleBlogItems}
                    </div>
                </div>
                <PaginationSection />
            </div>
        </>
    )
}

export default BlogPage
