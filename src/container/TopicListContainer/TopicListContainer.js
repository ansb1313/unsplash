import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import TopicItemList from "../../components/Topic/TopicItemList";
import TopicFooter from "../../components/TopicsFooter";
import {topicActions} from "../../redux/actionCreators";

const TopicListContainer = () => {

    useEffect(() => {

        getTopics()

    },[]);

    const {topics} = useSelector( state => state.topics);

    const getTopics = () => {
        topicActions.getTopics({
            per_page:30,
        })
    }

    const [feature, ...allTopics] = topics

    if(!topics || !feature){
        return '...loading'
    }


    return(
        <Container>
            <TopicItemList topics={topics}/>
            <TopicFooter/>
        </Container>
    )

}

const Container = styled.div`
    
  width: 1200px;
  margin: 0 auto;
    
`

export default TopicListContainer;