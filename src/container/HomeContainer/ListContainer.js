import React, {useEffect, useRef, useState, useCallback} from 'react';
import styled from 'styled-components';
import qs from 'qs'
import PhotoList from "../../components/Photo/PhotoList";
import Visual from "../../components/Visual";
import {photoActions, searchActions, topicActions} from '../../redux/actionCreators';
import {useSelector} from "react-redux";

const ListContainer = ({location}) => {

    const {photos, isLoading} = useSelector(state => state.photos)
    const photo = useSelector(state=>state.search.photos)
    const [page, setPage] = useState(1)

    useEffect(()=>{
        getPhotos()
    },[page])

    useEffect(()=>{
        getWallPaper()
    },[])

    const getPhotos = () => {
        photoActions.getPhotos({
            page,
            per_page:10
        })
    }

    const getWallPaper = useCallback(() => {
        searchActions.searchPhotos({
            query:'wallpaper',
            orientation:'landscape',
            per_page:20
        })
    },[])


    let VisualPhoto = photo?.results && [photo?.results[4],photo?.results[7],photo?.results[8],photo?.results[9],
        photo?.results[12], photo?.results[15],photo?.results[18],photo?.results[19]];
    let photoLength = VisualPhoto?.length;
    let randomPhoto = VisualPhoto[Math.floor(Math.random()*photoLength)] || photo?.results[12];

    let observer;

    const sentinelRef = useCallback((node) => {
        if(isLoading) return;
        if(observer) observer.disconnect()
        observer = new IntersectionObserver((entries)=>{
            if(isLoading) return;
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setPage(prevPage => prevPage + 1)
                }else{
                    console.log('outView')
                }
            })
        })
        if(node) observer.observe(node)
    },[isLoading])

    return(
        <Container>
            <Visual randomPhoto={randomPhoto}/>
            <PhotoList data={photos}/>
            <Sentinel ref={sentinelRef} />
        </Container>
    )

}

const Container = styled.div`
  padding-bottom: 50px;
  position: relative;
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

export default ListContainer;