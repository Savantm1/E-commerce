import React from 'react'
import styled from 'styled-components'

const StyledInputSub = styled.span`
    font-weight: 500;
    margin-left:5px;
    margin-top:5px;
`;

const InputSub = (props) => {
    return (
        <StyledInputSub {...props}>{props.title}</StyledInputSub>
    )
}

export default InputSub;
