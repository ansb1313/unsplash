import React from 'react';
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components';
import Search from "../pages/Search";
import Home from "../pages/Home";
import TopicContainer from "../container/TopicContainer/TopicContainer";
import Topic from '../pages/Topic'
import ViewAllTopic from '../pages/ViewAllTopic'

const Routes = () => {

    return(

        <Container>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={"/search/:query"} component={Search}/>
                <Route path={'/topics/:id'} component={Topic}></Route>
                <Route path={'/topics'} component={ViewAllTopic} />
            </Switch>
        </Container>
    )

}

const Container = styled.div`
    
    
    
`

export default Routes;