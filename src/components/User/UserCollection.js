import React from 'react';
import styled from 'styled-components';
import PhotoList from "../Photo/PhotoList";
import {SiUnsplash} from "react-icons/si";
import {useHistory} from "react-router-dom";
import SearchCollectionItem from "../Search/SearchCollectionItem";
import List from "../List/List";

const UserCollection = ({data}) => {

    const history = useHistory()

    if(!data){
        return null
    }else if(data.length === 0){
        return (
            <div>
                <Empty>
                    <img src={'https://unsplash.com/a/img/empty-states/collections.png'} alt=""/>
                </Empty>
                <MessageBox>
                    <div onClick={()=>{history.push('/')}}>
                        <SiUnsplash/>
                    </div>
                    <p>Make something awesome</p>
                </MessageBox>
            </div>
        )
    }

    console.log('userCollectionData',data)

    const CollectionItem = (item, index) => <SearchCollectionItem {...item} key={index} />

    return(

        <Container>
          <List data={data} render={CollectionItem}/>
        </Container>

    )

}

const Container = styled.div`
    width: 1200px;
  margin: 0 auto;
`
const Empty = styled.div`
  width: 300px;
  height: 225px;
  margin: 0 auto;  
  img{
    width: 100%;
    height: 100%;
  }
`
const MessageBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px auto 0 auto;
  svg{
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-bottom: 15px;
  }
  p{
    font-size: 14px;
    color:#676767
  }
`
export default UserCollection;