import React from 'react'
import styled from 'styled-components'

const StyledInputSub = styled.span`
    font-weight: 500;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
`;

const InputSub = (props) => {
    return (
        <StyledInputSub {...props}>{props.title}</StyledInputSub>
    )
}

export default InputSub;
