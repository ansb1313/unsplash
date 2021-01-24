import React from 'react';
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components';
import Photo from "../pages/Photo";

const Routes = () => {

    return(

        <Container>
            <Switch>
                <Route path={'/'} component={Photo}></Route>
            </Switch>
        </Container>

    )

}

const Container = styled.div`
    
    
    
`

export default Routes;