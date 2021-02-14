import React, {useEffect} from 'react';
import styled from 'styled-components';
import qs from 'qs'
import PhotoList from "../../components/Photo/PhotoList";
import Visual from "../../components/Visual";
import {photoActions} from '../../redux/actionCreators';
import {useSelector} from "react-redux";


const ListContainer = ({location}) => {

    const {photos} = useSelector(state => state.photos)

    const qsValues = qs.parse(location.search, {ignoreQueryPrefix: true})

    const page = Number(qsValues.page) || 1;

    useEffect(()=>{
        getPhotos()
    },[page])


    const getPhotos = () => {

        photoActions.getPhotos({
            client_id:'LKIzX3g24-Zz7B0pGwMstcPvGcZol7xlWtOprytAPzY',
            page,
            per_page:21
        })
    }

    return(

        <Container>
            <Visual/>
            <PhotoList photos={photos}/>
        </Container>

    )

}

const Container = styled.div`
    
  padding-bottom: 50px;
    
`

export default ListContainer;