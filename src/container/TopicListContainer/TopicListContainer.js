import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/reducer";
import {useHistory} from "react-router-dom";
import TopicItemList from "../../components/Topic/TopicItemList";
import TopicFooter from "../../components/TopicsFooter";



const TopicListContainer = () => {



    useEffect(() => {

        getTopics()

    },[]);

    const dispatch = useDispatch();

    const {topics} = useSelector( state => state );

    const history = useHistory()

    const getTopics = () => {

        dispatch(Action.Creators.getTopics({

            client_id:'LKIzX3g24-Zz7B0pGwMstcPvGcZol7xlWtOprytAPzY',
            per_page:30,

        }))

    }

    const [feature, ...allTopics] = topics

    if(!topics || !feature){
        return '...loading'
    }

    console.log('ccc',feature);


    return(

        <Container>

            <TopicItemList topics={topics}></TopicItemList>
            <TopicFooter></TopicFooter>

        </Container>

    )

}

const Container = styled.div`
    
  width: 1200px;
  margin: 0 auto;
    
`

export default TopicListContainer;