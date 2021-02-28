import React from 'react';
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components';
import Search from "../pages/Search";
import Home from "../pages/Home";
import Topic from '../pages/Topic'
import ViewAllTopic from '../pages/ViewAllTopic'
import Following from "../pages/Following";
import Collection from "../pages/Collection";
import User from "../pages/User";

const Routes = () => {

    return(
        <Container>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/following'} component={Following} />
                <Route path={"/search/:category/:query"} component={Search}/>
                <Route path={'/topics/:id'} component={Topic}/>
                <Route path={'/topics'} component={ViewAllTopic} />
                <Route path={'/collections/:id/:query'} component={Collection} />
                <Route path={'/users/:username/:id'} component={User}/>
            </Switch>
        </Container>
    )

}

const Container = styled.div`
    
    
    
`

export default Routes;