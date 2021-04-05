import React, {useEffect, useRef, useState} from 'react'
import styled, {css} from 'styled-components';
import {Link, NavLink} from "react-router-dom";
import cn from 'classnames';
import {IconNext, IconPrev} from "../../images/Icons";

const TopicsMenu = ({topics}) => {

    const topicItemsRef = useRef(null);
    const trackRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    useEffect(() => {
        if(topicItemsRef.current){
            topicItemsRef.current.dispatchEvent(new Event('scroll'))
        }
    },[topics])

    const onClickLeft = () => {
        topicItemsRef.current.scrollLeft = Math.max(scrollLeft - 200, 0);
    }
    const onClickRight = () => {
        topicItemsRef.current.scrollLeft = Math.min(scrollLeft + 200, maxScroll)
    }

    const onScroll = (e) => {
        setScrollLeft(e.target.scrollLeft);
        setMaxScroll(e.target.scrollWidth - e.target.clientWidth)
    }


    return (
        <Container>
            <ButtonLeft onClick={onClickLeft} className={cn({isActive: scrollLeft > 0 })}>
                <IconPrev/>
            </ButtonLeft>

            <ButtonRight onClick={onClickRight} className={cn({isActive: scrollLeft < maxScroll})}>
                <IconNext/>
            </ButtonRight>

            <TopicItems ref={topicItemsRef} onScroll={onScroll}>
                <Track ref={trackRef}>
                    {
                        topics.map((topic, i) => {
                            return(
                                <TopicItem activeClassName={'topicItemStyle'} to={`/topics/${topic.slug}`} key={i}>{topic.title}</TopicItem>
                            )
                        })
                    }
                </Track>
            </TopicItems>
        </Container>
    )
}


const Container = styled.div`
    position:relative;
    overflow:hidden;
    flex: 1;
`;

const TopicItems = styled.div`
    overflow: auto;
`;

const Track = styled.div`
   display:flex; 
   width: max-content;
`;

const TopicItem = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #767676;
  font-size: 14px;
  border-bottom: 2px solid #fff;
  transition:all 0.3s;
  white-space: nowrap;
  margin: 0 12px;
  padding: 14px 0px 16px 0;
  &:hover {
    color: #000;
  }
  &.topicItemStyle {
    border-bottom: 2px solid #000;
    color: #000;
`;

const ButtonLeft = styled.div`
    position:absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    display:flex;
    align-items:center;
    cursor:pointer;
    padding: 0 15px;
    transform: translateX(800px) scale(0);
    opacity: 0;
    transition: 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    &.isActive {
         transform: none;
         opacity: 1;
         background:#18f;
    }
`;

const ButtonRight = styled.div`
    position:absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    display:flex;
    align-items:center;
    cursor:pointer;
    padding: 0 15px;
    background:rgba(238,238,238,0.56);
    transform: translateX(-800px) scale(0);
    opacity: 0;
    transition: 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    &.isActive {
         transform: none;
         opacity: 1;
         background:#18f;
    }
`;

export default TopicsMenu;