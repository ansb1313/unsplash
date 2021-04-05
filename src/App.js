import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle} from "./scss/styled/Reset.Styled";
import Routes from "./routes/Routes";
import HeaderContainer from "./container/HeaderContainer";
import PhotoPopupContainer from "./container/PhotoPopupContainer";
import {useSelector} from "react-redux";

const theme = {
    dark:{
        popupHeader:'#333',
    },
    light:{
        popupHeader:'#fff',
    }
}

const App = () => {

    const {mode} = useSelector(state => state.app)

    return(
        <ThemeProvider theme={{
            mode,
            ...theme,
        }}>
            <Container>
                <HeaderContainer/>
                <GlobalStyle/>
                <Routes/>
                <PhotoPopupContainer/>
            </Container>
        </ThemeProvider>
    )
}

const Container = styled.div`
    
`

export default App;