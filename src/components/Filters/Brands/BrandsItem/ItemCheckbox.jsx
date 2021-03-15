import React from 'react'
import styled from 'styled-components'

const StyledItemCheckbox = styled.input.attrs({ type: 'checkbox' })`
    &::before {
        content: "";
        width: 20px;
        height: 20px;
        background-color:green;
        position:absolute;
        border-radius: 3px;
    }
`;

const ItemCheckbox = (props) => {
    return (
            <StyledItemCheckbox {...props}>
            </StyledItemCheckbox>



    )
}
export default ItemCheckbox;