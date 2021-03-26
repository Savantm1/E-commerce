import React from 'react'
import CategoryMenu from '../Filters/CategoryMenu/CategoryMenu'
import RecipeItem from '../RecipeItem/RecipeItem'
import "./CategorySectionRow.scss"

const CategorySectionRow = (props) => {
    return (
        <>
            <section className="category_section_row">
                <CategoryMenu className="category_section_row__filter" categoryName={props.categoryName}/>
                <div className="recipes_container">
                    <RecipeItem />
                    <RecipeItem />
                </div>
            </section>        
        </>
    )
}

export default CategorySectionRow
