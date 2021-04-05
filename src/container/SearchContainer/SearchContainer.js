import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import PhotoList from "../../components/Photo/PhotoList";
import {searchActions} from "../../redux/actionCreators";
import List from "../../components/List/List";
import SearchCollectionItem from "../../components/Search/SearchCollectionItem";
import SearchUserItem from "../../components/Search/SearchUserItem";
import RelatedItems from "../../components/Search/RelatedItems";

const SearchContainer = ({match}) => {

    const query = match.params.query
    const category = match.params.category
    const {photos, collections, users, related_searches} = useSelector(state => state.search)

    useEffect(() => {
        searchPhotos()
    }, [query])

    const searchPhotos = () => {
        searchActions.searchPhotos({
            per_page: 12,
            query
        })
    }

    // const toLowerCase = (data) => {
    //     let relatedTitle;
    //     relatedTitle = data.substring(0,1).toLowerCase() + data.substring(1)
    //     return relatedTitle
    // }

    const renderCollections = (item, index) => <SearchCollectionItem {...item} key={index}/>
    const renderUsers = (item, index) => <SearchUserItem {...item} key={index}/>

    // ...Route.js 페이지 <Route path={"/search/:category/:query"} component={Search}/>
    // /:category -> match.params.category 값에 따라서 다른 값을 리턴하는 함수
    const RenderList = () => {
        switch(category) {
            case 'photos': {
                return <PhotoList data={photos.results} />;
            }
            case 'collections': {
                return <List data={collections.results}
                             render={renderCollections}/>;
            }
            case 'users': {
                return <List data={users.results}
                             render={renderUsers}/>;
            }
        }
    }

    return (

        <Container>
            <div className="contents">
                <Title>
                    <h1>{query}</h1>
                </Title>
                <RelatedItems related_searches={related_searches}/>
                <RenderList/>
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
export const Title = styled.div`
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