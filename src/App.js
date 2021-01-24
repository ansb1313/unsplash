import React from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "./scss/styled/Reset.Styled";
import Routes from "./routes/Routes";
import Header from "./components/Header";
import Visual from "./components/Visual";

const App = () => {

    return(

        <Container>
            <GlobalStyle/>
            <Header></Header>
            <Visual></Visual>
            <Routes/>
        </Container>

    )

}

const Container = styled.div`
    
    
    
`

export default App;