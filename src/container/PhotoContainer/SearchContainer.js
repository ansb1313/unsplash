import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Action} from "../../redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import PhotoList from "../../components/Photo/PhotoList";
import SearchBox from "../../components/SearchBox";

const SearchContainer = ({match}) => {

    const query = match.params.query

    const dispatch = useDispatch()
    const {searchResult} = useSelector(state => state)

    useEffect(() => {
        searchPhotos()
    },[query])

    const searchPhotos = () => {
        dispatch(Action.Creators.searchPhotos({
            client_id:'LKIzX3g24-Zz7B0pGwMstcPvGcZol7xlWtOprytAPzY',
            per_page:12,
            query
        }))

    }

    return(

        <Container>
            <PhotoList photos={searchResult.results}></PhotoList>
        </Container>

    )

}

const Container = styled.div`

  padding-top: 30px;
  padding-bottom: 50px;

`

export default SearchContainer;