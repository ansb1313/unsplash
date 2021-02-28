import React from 'react'
import styled from 'styled-components';

const Detail = ({urls}) => {

    return (
        <Container>
            <img src={urls.regular} alt=""/>
        </Container>
    )
}


const Container = styled.div`
    height: 80vh;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export default Detail;