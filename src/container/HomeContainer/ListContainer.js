import React, {useEffect} from 'react';
import styled from 'styled-components';
import qs from 'qs'
import PhotoList from "../../components/Photo/PhotoList";
import Visual from "../../components/Visual";
import {photoActions, searchActions, topicActions} from '../../redux/actionCreators';
import {useSelector} from "react-redux";

const ListContainer = ({location}) => {

    const {photos} = useSelector(state => state.photos)
    const photo = useSelector(state=>state.search.photos)

    const qsValues = qs.parse(location.search, {ignoreQueryPrefix: true})

    const page = Number(qsValues.page) || 1;

    useEffect(()=>{
        getPhotos()
        getWallPaper()
    },[page])

    const getPhotos = () => {
        photoActions.getPhotos({
            page,
            per_page:21
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

    return(

        <Container>
            <Visual randomPhoto={randomPhoto}/>
            <PhotoList data={photos}/>
        </Container>

    )

}

const Container = styled.div`
    
  padding-bottom: 50px;
    
`

export default ListContainer;