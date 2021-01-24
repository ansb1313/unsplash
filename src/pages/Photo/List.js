import React from 'react';
import styled from 'styled-components';
import ListContainer from "../../container/PhotoContainer/ListContainer";

const List = (props) => {

    return(

        <Container>
            <ListContainer {...props}></ListContainer>
        </Container>

    )

}

const Container = styled.div`
    
    
    
`

export default List;