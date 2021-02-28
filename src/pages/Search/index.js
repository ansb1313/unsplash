import React from 'react'
import styled from 'styled-components';
import SearchContainer from "../../container/SearchContainer/SearchContainer";

const Search = (props) => {

    return (
        <Container>
            <SearchContainer {...props}/>
        </Container>
    )
}


const Container = styled.div`
  padding-top: 145px;
`;

export default Search;