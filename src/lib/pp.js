import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PhotoPopup from "../components/PhotoPopup";

const pp = () => {

    return ReactDOM.createPortal(
        <Container>
            <PhotoPopup></PhotoPopup>
        </Container>,
        document.getElementById('popup')
    )

}

const Container = styled.div`
    
    
    
`

export default pp;