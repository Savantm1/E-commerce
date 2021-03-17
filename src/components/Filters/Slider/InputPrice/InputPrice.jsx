import React from 'react'
import styled from 'styled-components'


const StyledInputPrice = styled.input.attrs({ type: 'text' })`
    position: relative;
    width: 100px;
    border: 1px solid rgba(209, 209, 209, 1);;
    border-radius: 12px;
    outline: none;
    font-size: 14px;
    padding: 11px 16px 12px 22px;
    background: #F9F9F9;
    color: #A9A9A9;
    &:focus {
        border-color:rgba(146, 192, 100, 1);
    }

`;



const InputPrice = (props) => {
    return  <StyledInputPrice {...props}/>
}

export default InputPrice
