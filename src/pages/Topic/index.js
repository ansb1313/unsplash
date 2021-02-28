import React from 'react';
import styled from 'styled-components';
import TopicContainer from "../../container/TopicContainer/TopicContainer";

const index = (props) => {

    return(

        <Container>
            <TopicContainer {...props}></TopicContainer>
        </Container>

    )

}

const Container = styled.div`
  padding-top: 145px;
    
    
`

export default index;