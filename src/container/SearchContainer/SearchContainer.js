import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import PhotoList from "../../components/Photo/PhotoList";
import {searchActions} from "../../redux/actionCreators";
import {Route, Switch} from "react-router-dom";
import CollectionList from "../../components/SearchCollection/CollectionList";
import SearchUserList from "../../components/SearchUsers/SearchUserList";

const SearchContainer = ({match}) => {

    const query = match.params.query

    const {searchResult, collections, users} = useSelector(state => state.search)

    useEffect(() => {
        searchPhotos()
        searchCollections()
        searchUsers()
    },[query])

    const searchPhotos = () => {
        searchActions.searchPhotos({
            client_id:'LKIzX3g24-Zz7B0pGwMstcPvGcZol7xlWtOprytAPzY',
            per_page:12,
            query
        })
    }

    const searchCollections = () => {

        searchActions.searchCollections({
            client_id:'LKIzX3g24-Zz7B0pGwMstcPvGcZol7xlWtOprytAPzY',
            query,
            per_page:12,
        })

    }

    const searchUsers = () => {

        searchActions.searchUsers({
            client_id:'LKIzX3g24-Zz7B0pGwMstcPvGcZol7xlWtOprytAPzY',
            query,
            per_page:12,
        })

    }


    return(

        <Container>
            <div className="contents">
            <Title>
                <h1>{query}</h1>
            </Title>
            <Switch>
                <Route path={`/search/photos/${query}`}>
                    <PhotoList photos={searchResult.results}/>
                </Route>
                <Route path={`/search/collections/${query}`}>
                    <CollectionList collections={collections.results} />
                </Route>
                <Route path={`/search/users/${query}`}>
                    <SearchUserList users={users.results} />
                </Route>
            </Switch>
            </div>
        </Container>

    )

}

const Container = styled.div`

  width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 50px;
  
  
`

const Title = styled.div`

      box-sizing: border-box;
      padding: 0 10px;
    h1{
      text-transform: capitalize;
      font-size: 44px;
      margin-bottom: 20px;
      text-indent: -3px;
    }
    
`

export default SearchContainer;