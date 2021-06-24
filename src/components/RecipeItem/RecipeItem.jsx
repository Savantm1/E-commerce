import React from 'react';
import Button from '../Button/Button';
import "./RecipeItem.scss";

const RecipeItem = (props) => {
    return (
        <>
            <div className="recipe">
                <p className="recipe__subtitle">{props.data.title}</p>
                <h3 className="recipe__title">Space for heading</h3>
                <Button className="recipe__btn" bg="transparent" cl="#151515" value="Read recepies >"/>
            </div>
            
        </>
    )
}

export default RecipeItem;
