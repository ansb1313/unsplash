import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import PhotoList from "../../components/Photo/PhotoList";
import {searchActions} from "../../redux/actionCreators";
import List from "../../components/List/List";
import SearchCollectionItem from "../../components/Search/SearchCollectionItem";
import SearchUserItem from "../../components/Search/SearchUserItem";
import {NavLink, Route} from "react-router-dom";
import Search from "../../pages/Search";

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

    const toLowerCase = (data) => {
        let relatedTitle;
        relatedTitle = data.substring(0,1).toLowerCase() + data.substring(1)
        return relatedTitle
    }

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
               <div className="RelatedContents">
                <RelatedSearchItems>
                    <ItemContainer>
                            {
                                related_searches.map((item, index)=>(
                                    <RelatedItem to={`/search/photos/${item.title}`} key={index}>
                                        {item.title}
                                    </RelatedItem>
                                ))
                            }
                    </ItemContainer>
                </RelatedSearchItems>
               </div>
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
  .RelatedContents{
    box-sizing: border-box;
    padding: 0 10px;
  }
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

const RelatedSearchItems = styled.div`
  position: relative;
  overflow: hidden;
  height: 90px;
`

const ItemContainer = styled.div`
  display: flex;
  left: 0;
  top: 0;
  position: absolute;;
`

const RelatedItem = styled(NavLink)`
  border: solid 1px #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  border-radius: 4px;
  text-align: center;
  height: 37px;
  padding-bottom: 2px;
  font-size: 13px;
  color: #777;
  transition: 0.2s;

  &:hover {
    border: solid 1px #444;
    color: #444
  }

  text-transform: capitalize;
  margin: 0 4px;
  &:first-child{
    margin-left: 0px;
  }
  &:last-child{
    margin-right: 0px;
  }
`

export default SearchContainer;