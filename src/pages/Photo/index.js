import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";
import List from "./List";
import Search from "./Search";

const Photo = () => {

    return(

        <Container>
            <Switch>

                <Route exact={true} path={'/'} component={List}></Route>
                <Route path={'/search/:query'} component={Search}></Route>

            </Switch>
        </Container>

    )

}

const Container = styled.div`



`

export default Photo;