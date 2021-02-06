import React, {useEffect} from 'react';
import styled from 'styled-components';
import qs from 'qs'
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/reducer";
import PhotoList from "../../components/Photo/PhotoList";
import Pagenation from "../../components/Pagenation";
import Visual from "../../components/Visual";


const ListContainer = ({location}) => {

    const dispatch = useDispatch();

    const {photos} = useSelector(state => state)

    const qsValues = qs.parse(location.search, {ignoreQueryPrefix: true})

    const page = Number(qsValues.page) || 1;

    useEffect(()=>{
        getPhotos()
    },[page])

    const getPhotos = () => {

        dispatch(Action.Creators.getPhotos({
            client_id:'LKIzX3g24-Zz7B0pGwMstcPvGcZol7xlWtOprytAPzY',
            page,
            per_page:21
        }))
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