import React, {useEffect, useState, useCallback, useRef} from 'react';
import styled from 'styled-components';
import qs from 'qs'
import {collectionActions} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import CollectionHeader from "../../components/Collection/CollectionHeader";
import PhotoList from "../../components/Photo/PhotoList";
import TopicFooter from "../../components/TopicsFooter";

const CollectionContainer = (props) => {

    const {match} = props

    const {collectionPhotos, collectionData, isLoading} = useSelector(state => state.collections)
    const id = match.params.id;
    const [page, setPage] = useState(1)

    useEffect(()=>{
        getCollectionPhotos();
    },[id, page])

    console.log('cp',collectionPhotos.length)

    useEffect(() => {
        getCollectionData();
        return () => {
            collectionPhotosCleanup()
        }
    },[id])

    const getCollectionPhotos = () => {
        collectionActions.getCollectionPhotos({
            page,
            per_page:10
        }, id)
    }
    const getCollectionData = () => {
        collectionActions.getCollectionData(id)
    }
    const collectionPhotosCleanup = () => {
        collectionActions.updateState({
            collectionPhotos:[]
        })
    }

    const total = (data) => {
        if(data>1){
            return 'photos'
        }else if(data<2){
            return 'photo'
        }
    }

    let collectionObserver;
    collectionObserver = useRef();

    const sentinelRef = useCallback((node) => {
        if(collectionPhotos.length == collectionData.total_photos) return;
        if(isLoading) return;
        if(collectionObserver.current) collectionObserver.current.disconnect();
        collectionObserver.current = new IntersectionObserver((entries) => {
          if(isLoading) return;
          entries.forEach(entry => {
              if(entry.isIntersecting){
                  setPage(prevPage => prevPage + 1)
              }else{
                  console.log('outView')
              }
          })
        })
        if(node) collectionObserver.current.observe(node)
    },[isLoading])

    if(!collectionData) return '...loading';

    return(

        <Container>
            <CollectionHeader data={collectionData} />
            <TotalPhotos>
                {collectionData.total_photos} {total(collectionData.total_photos)}
            </TotalPhotos>
            <PhotoList data={collectionPhotos}/>
            <Sentinel ref={sentinelRef} />
            <TopicFooter paddingTopValue={100}></TopicFooter>
        </Container>

    )

}

const Container = styled.div`
  position: relative;
`

const TotalPhotos = styled.div`
  box-sizing: border-box;
  padding: 0 10px;
  margin:0 auto 15px auto;
  font-size: 14px;
  width: 1200px;
`

const Sentinel = styled.div`
  height: 50px;  
  background: #18f;
  position: absolute;
  bottom: 200px;
  left: 0;
  right: 0;
  z-index: 1000;
  pointer-events: none;
`

export default CollectionContainer;