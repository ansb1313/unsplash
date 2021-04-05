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

    // const qsValues = qs.parse(location.search, {ignoreQueryPrefix: true})
    //
    // const page = Number(qsValues.page) || 1;

    useEffect(()=>{
        getPhotos()
        getWallPaper()
    },[page])

    const getPhotos = () => {
        photoActions.getPhotos({
            page,
            per_page:10
        })
    }

    const getWallPaper = () => {
        searchActions.searchPhotos({
            query:'wallpaper',
            orientation:'landscape',
            per_page:20
        })
    }

    let photoLength = photo?.results.length + 1;
    let randomPhoto = photo?.results[Math.floor(Math.random()*photoLength)]

    // const cb = (entries, observer) => {
    //     entries.forEach(entry => {
    //         if(entry.isIntersecting){
    //             console.log('inView')
    //         }else {
    //             console.log('outView')
    //         }
    //     })
    // }
    //
    // let observer = new IntersectionObserver(cb,{
    //     threshold:0.1
    // })
    //
    // useEffect(()=>{
    //     if(sentinelRef.current){
    //         observer.observe(sentinelRef.current)
    //     }
    // },[])
    //
    // const sentinelRef = useRef()

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