import React from 'react'
import { useSelector } from 'react-redux'
import CategoryMenuContainer from '../Filters/CategoryMenu/CategoryMenuContainer'
import Title from '../Filters/Title/Title'
import BlogBigItem from '../BlogSection/BlogBigItem/BlogBigItem'
import "./CategorySectionRow.scss"

const CategorySectionRow = (props) => {

     const data = useSelector(state => state.blog.blog)

     const mainRowBlogItems = data.map((element,index)=>{
        if(index < 2) {
            return(
                <BlogBigItem large="true" key={index} data={element} />
                )
        }
})

    return (
        <>
            <section className="category_section_row">
                <CategoryMenuContainer className="category_section_row__filter" categoryName={props.categoryName}/>
                <div className="recipes_container">
                    <Title>{props.categoryName}</Title>
                    {mainRowBlogItems }
                </div>
            </section>        
        </>
    )
}

export default CategorySectionRow
