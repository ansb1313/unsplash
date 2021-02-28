import React from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "./scss/styled/Reset.Styled";
import Routes from "./routes/Routes";
import HeaderContainer from "./container/HeaderContainer";
import PhotoPopupContainer from "./container/PhotoPopupContainer";

const App = () => {

    return(
        <Container>
            <HeaderContainer/>
            <GlobalStyle/>
            <Routes/>
            <PhotoPopupContainer/>
        </Container>
    )
}

const Container = styled.div`
    
`

export default App;