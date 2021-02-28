import React from 'react';
import styled from 'styled-components';
import CollectionContainer from "../../container/CollectionContainer";

const Collection = (props) => {
    return(
        <Container>
            <CollectionContainer {...props} />
        </Container>
    )
}

const Container = styled.div`
  padding-top: 99px;
`

export default Collection;