import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/reducer";
import {useHistory} from "react-router-dom";

const HeaderTopicList = () => {


    useEffect(() => {

        getTopics()

    },[]);

    const dispatch = useDispatch();

    const {topics} = useSelector( state => state );

    const getTopics = () => {

        dispatch(Action.Creators.getTopics({

            client_id:'LKIzX3g24-Zz7B0pGwMstcPvGcZol7xlWtOprytAPzY',
            per_page:30,

        }))

    }

    const prevButton = () => {

        const menu = Menu

    }


    const history = useHistory()




    return(

        <Container>
            <Menu>
                <p onClick={()=>{
                    history.push('/')
                }}>Editorial</p>
                <p className={'border'}>Following</p>
            </Menu>
            <Topics>
                <div className="prev"></div>
                {

                    topics.map((item, index) => (
                            <li key={index}>
                            <p onClick={()=>{history.push(`/topics/${item.slug}`)}}>{item.title}</p>
                            </li>
                    ))

                }
                <div className="next"></div>
            </Topics>
            <AllTopic>
                <p onClick={()=>{
                    history.push('/topics')
                }}>
                    View all
                </p>
            </AllTopic>
        </Container>

    )

}

const Container = styled.div`
  width: 100%;

`

const Menu = styled.div`
  display: flex;

  p {
    font-size: 14px;
    white-space: nowrap;
    color: #767676;
    cursor: pointer;
    padding: 10px;

  }

  .border {
    position: relative;

  }

  .border::after {
    content: "";
    display: block;
    width: 0.5px;
    height: 30px;
    background: #cecece;
    opacity: 0.7;
    position: absolute;
    right: 0;
    top: 5px;

  }
`

const Topics = styled.div`

  display: flex;
  position: relative;
  div{
    position: absolute;
  }

  li{
    font-size: 14px;
    white-space: nowrap;
    color: #767676;
    padding: 10px;
    p{
      cursor: pointer;
    }
    
  }
    
`
const AllTopic = styled.div`

  p{
    font-size: 14px;
    color: #767676;
    cursor: pointer;
    padding: 10px;
  }
    
`


export default HeaderTopicList;