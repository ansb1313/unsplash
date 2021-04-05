import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PhotoPopup from "../../components/PhotoPopup";
import {useSelector} from "react-redux";
import {photoActions} from "../../redux/actionCreators";

const PhotoPopupContainer = () => {

    const {photoPopup} = useSelector(state => state.photos);

    if(!photoPopup.id) return null;

    const onClose = () => {
        photoActions.updateState({
            photoPopup: {}
        })
    }

    // onPopup은 Photolist에

    return ReactDOM.createPortal(
        <Container>
            <PhotoPopup onClose={onClose}/>
        </Container>,
        document.getElementById('popup')
    )
}


const Container = styled.div`
`;


export default PhotoPopupContainer;