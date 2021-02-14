import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {topicActions} from "../../redux/actionCreators";
import {navigate} from "../../lib/History";

const HeaderTopicList = () => {


    useEffect(() => {

        getTopics()

    }, []);

    const {topics} = useSelector(state => state.topics);

    const getTopics = () => {

        topicActions.getTopics({

            client_id: 'LKIzX3g24-Zz7B0pGwMstcPvGcZol7xlWtOprytAPzY',
            per_page: 30,

        })

    }

    const [box, setBox] = useState(0)

    const right = () => {
        setBox(box+100)
    }

    const history = useHistory()


    return (
        <Container className={"HeaderTopicList"}>
            <Menu>
                <p onClick={() => {
                    history.push('/')
                }}>Editorial</p>
                <p className={'border'}>Following</p>
            </Menu>
            <Topics>
                <div className="prev" onClick={right}>
                    <svg width="24" height="24" className="_1A-eG" version="1.1" viewBox="0 0 32 32"
                         aria-hidden="false">
                        <path d="M20.6667 24.6666l-2 2L8 16 18.6667 5.3333l2 2L12 16l8.6667 8.6666z"/>
                    </svg>
                </div>
                <ul style={{left:'0px', position:'absolute'}}>
                    {

                        topics.map((item, index) => (
                            <li key={index}>
                                <p onClick={() => {
                                    navigate(`/topics/${item.slug}`)
                                }}>{item.title}</p>
                            </li>
                        ))

                    }
                </ul>
                <div className="next">
                    <svg width="24" height="24" className="_1A-eG" version="1.1" viewBox="0 0 32 32"
                         aria-hidden="false">
                        <path d="M11.3333 7.3333l2-2L24 16 13.3333 26.6666l-2-2L20 16l-8.6667-8.6667z"/>
                    </svg>
                </div>
            </Topics>
            <AllTopic>
                <p onClick={() => {
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
  display:flex;
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
  overflow:hidden;
  flex: 1;
  .prev, 
  .next {
    position: absolute;
    display: none ;
  }
  
  .next {
      right: 0;
  }

  ul {
      overflow-x: scroll;
      display:flex;
    white-space:nowrap;
      li{
        font-size: 14px;
        white-space: nowrap;
        color: #767676;
        padding: 10px;
        p{
          cursor: pointer;
        }
        
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