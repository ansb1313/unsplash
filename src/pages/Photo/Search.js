import React from 'react';
import styled from 'styled-components';
import SearchContainer from "../../container/PhotoContainer/SearchContainer";

const Search = (props) => {

    return(

        <Container>
           <SearchContainer {...props}></SearchContainer>
        </Container>

    )
}

const Container = styled.div`



`

export default Search;