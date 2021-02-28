import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink, useHistory} from "react-router-dom";
import TopicsMenu from "./TopicsMenu";

const HeaderTopicList = () => {

    const {topics} = useSelector(state => state.topics);

    return (
        <Container className={"HeaderTopicList"}>
            <Menu>
                <MenuItem activeClassName={'linkStyle'} exact to={'/'}>Editorial</MenuItem>
                <MenuItem className={'border'} activeClassName={'linkStyle'} to={'/following'}>
                    Following
                </MenuItem>
            </Menu>
            <TopicsMenu topics={topics}/>
            <AllTopic>
                <MenuItem activeClassName={'linkStyle'} to={'/topics'} exact={true}>
                    View all
                </MenuItem>
            </AllTopic>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5px;
`

const Menu = styled.div`
  display: flex;
`
const MenuItem = styled(NavLink)`

  font-size: 14px;
  white-space: nowrap;
  color: #767676;
  cursor: pointer;
  padding: 14px 0px 16px 0;
  margin: 0 10px;
  border-bottom: 2px solid #fff;
  transition: all 0.3s;
  
  &.linkStyle{
    border-bottom: 2px solid #000;
    color: #000;
  }
  
  &:hover{
    color:#000;
  }

  &.border {
    position: relative;
  }

  &.border::after {
    content: "";
    display: block;
    width: 0.5px;
    height: 30px;
    background: #cecece;
    opacity: 0.7;
    position: absolute;
    right: -10px;
    top: 10px;
  }
    
`

const AllTopic = styled.div`
  display: flex;
`


export default HeaderTopicList;