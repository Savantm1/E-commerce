import React from 'react'
import styled from 'styled-components'

const StyledItemCheckbox = styled.input.attrs({ type: 'checkbox' })`
        width:1px;
        position:absolute;
        left:${(props)=> props.left || '0px'};
        cursor:pointer;
        
    &::before {
        box-sizing:border-box;
        content: "";
        width: 20px;
        height: 20px;
        position:absolute;
        left: -1px;
        top: -5px;
        border-radius: 3px;
        background:white;
        border: 2px solid #D1D1D1;
    }

    &:checked {
        &::before {
            cursor:pointer;
            border-color: #46760A;
            background-color: #6A983C;
        }
        &::after {
            cursor:pointer;
            box-sizing:border-box;
            content: "✓";
            color:white;
            width: 20px;
            height: 20px;
            position: absolute;
            left: 4px;
            top:-4px;
        }
    }
`;

const ItemCheckbox = (props) => {
    return (
            <StyledItemCheckbox {...props}>
            </StyledItemCheckbox>



    )
}
export default ItemCheckbox;