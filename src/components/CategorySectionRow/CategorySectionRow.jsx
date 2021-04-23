import React from 'react'
import CategoryMenu from '../Filters/CategoryMenu/CategoryMenu'
import Title from '../Filters/Title/Title'
import RecipeItem from '../RecipeItem/RecipeItem'
import "./CategorySectionRow.scss"

const CategorySectionRow = (props) => {
    return (
        <>
            <section className="category_section_row">
                <CategoryMenu className="category_section_row__filter" categoryName={props.categoryName}/>
                <div className="recipes_container">
                    <Title>{props.categoryName}</Title>
                    <RecipeItem />
                    <RecipeItem />
                </div>
            </section>        
        </>
    )
}

export default CategorySectionRow
