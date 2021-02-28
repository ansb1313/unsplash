import React, {useEffect} from 'react';
import styled from 'styled-components';
import qs from 'qs'
import {collectionActions} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import CollectionHeader from "../../components/Collection/CollectionHeader";
import PhotoList from "../../components/Photo/PhotoList";
import TopicFooter from "../../components/TopicsFooter";

const CollectionContainer = (props) => {

    const {match} = props

    const id = match.params.id;
    const {collectionPhotos, collectionData} = useSelector(state => state.collections)

    useEffect(()=>{
        getCollectionPhotos()
    },[id])

    const getCollectionPhotos = () => {
        collectionActions.getCollectionPhotos(id)
    }

    const total = (data) => {
        if(data>1){
            return 'photos'
        }else if(data<2){
            return 'photo'
        }
    }

    console.log('collectionData',collectionData)

    if(!collectionData) return '...loading';

    return(

        <Container>
            <CollectionHeader data={collectionData} />
            <TotalPhotos>
                {collectionData.total_photos} {total(collectionData.total_photos)}
            </TotalPhotos>
            <PhotoList data={collectionPhotos}/>
            <TopicFooter paddingTopValue={100}></TopicFooter>
        </Container>

    )

}

const Container = styled.div`
`

const TotalPhotos = styled.div`
  box-sizing: border-box;
  padding: 0 10px;
  margin:0 auto 15px auto;
  font-size: 14px;
  width: 1200px;
`

export default CollectionContainer;