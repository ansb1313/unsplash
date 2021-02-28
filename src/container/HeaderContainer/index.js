import React, {useEffect} from 'react'
import styled from 'styled-components';
import Header from "../../components/Header";
import {Route} from "react-router-dom";
import HeaderTopicList from "../../components/Header/HeaderTopicList";
import HeaderSearchMenu from "../../components/Header/HeaderSearchMenu";
import {topicActions} from "../../redux/actionCreators";

const HeaderContainer = () => {

    useEffect(() => {
        getTopics();
    }, []);

    const getTopics = () => {
        topicActions.getTopics({
            per_page: 30,
        })
    }

    return (
        <Container>
            <Header/>
            <Route exact path={["/", '/topics/:id','/topics','/following']} component={HeaderTopicList}/>
            <Route path={['/search/:category/:query',]} component={HeaderSearchMenu}/>
            {/*
               header 상위 구조는 고정 url에 따라서 하위 구조 다르게
               */}
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background: #fff;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,.08), 0 0 1px rgba(1,0,0,.1);
`;

export default HeaderContainer;