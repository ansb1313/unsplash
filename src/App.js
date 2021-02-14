import React from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "./scss/styled/Reset.Styled";
import Routes from "./routes/Routes";
import Header from "./components/Header";

const App = () => {

    return(

        <Container>
            <Header></Header>
            <GlobalStyle/>
            <Routes/>
        </Container>

    )

}

const Container = styled.div`
    
    
    
`

export default App;