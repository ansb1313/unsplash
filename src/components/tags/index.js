import React from 'react'
import styled from 'styled-components';

const Tags = ({data = []}) => {

    return (
        <Container>
            {
                data.map((item, i) => <Tag key={i}>{item.title}</Tag>)
            }
        </Container>
    )
}


const Container = styled.div`
    display:flex;    
`;

const Tag = styled.div`
    margin-right: 10px;
    margin-bottom: 8px;
    white-space: nowrap;
    height: 26px;
    padding: 0 8px;
    display:flex;
    align-items:center;
    font-size: 14px;
    color: #787878;
    background: #eee;
    cursor: pointer;
    transition: all 0.2s;
    text-transform: capitalize;
    &:hover {
        color: #111;
        background: #dedede;
    }
`;

export default Tags;