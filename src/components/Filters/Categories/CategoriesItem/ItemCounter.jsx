import React from 'react';
import styled from 'styled-components';
import './../../../../_variables.module.scss';

const StyledItemCounter = styled.span`
    background: rgba(244, 248, 236, 1);
    color: rgba(106, 152, 60, 1);
    font-weight: 600;
    line-height:18px;
    font-size: 0.9rem;
    padding: 0.5rem;
    border-radius:12px;
`;

const ItemCounter = (props) => {
    return <StyledItemCounter {...props}>
        {props.count}
    </StyledItemCounter>
}

export default ItemCounter
