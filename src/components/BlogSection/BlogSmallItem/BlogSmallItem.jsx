import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../Filters/Title/Title'
import "./BlogSmallItem.scss"

const BlogSmallItem = (props) => {

    const imgURL =`http://localhost:7000/blog/`

    return (
        <Link to={`/blog_item/${props.data.id}`}>
        <div className="blog_small_item">
            <div className="blog_small_item__info_blog">
                <Title  margin="0 0 1rem 0">{props.data.title}</Title>
                <div className="autor_block">
                    <span className="autor_block__autor_name">{props.data.author}</span>
                    <span className="autor_block__data">{props.data.date}</span>
                </div>
            </div>
            <div className="blog_small_item__block_img">
                <img src={
                    `${imgURL}${props.data.images}` || props.postImg} alt="#" className="blog_small_item__bg" />
            </div>
        </div>
        </Link>
    )
}

export default BlogSmallItem
