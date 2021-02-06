import React from 'react'
import styled from 'styled-components';
import ListContainer from "../../container/HomeContainer/ListContainer";

const Home = (props) => {

    return (
        <Container>
            <ListContainer {...props}/>
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Home;