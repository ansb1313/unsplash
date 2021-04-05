import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {topicActions} from "../../redux/actionCreators";
import TopicPage from "../../components/Topic/TopicPage";

const TopicContainer = ({match}) => {

    const slug = match.params.id

    useEffect(()=>{

        getTopicPage();

    },[slug])

    const {topicPage, topicPhotos} = useSelector(state => state.topics);

    const getTopicPhotos = () => {
        topicActions.getTopicPhotos({
            per_page:12,
        }, slug);
    }

    const getTopicPage = () => {
        topicActions.getTopicPage({
        }, slug)

        getTopicPhotos()
    }

    return(
        <Container>
           <TopicPage topicPage={topicPage} topicPhotos={topicPhotos}/>
        </Container>

    )

}

const Container = styled.div`
    padding: 60px 0;
`

export default TopicContainer;