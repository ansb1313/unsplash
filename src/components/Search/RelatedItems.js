import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {IconNext, IconPrev} from "../../images/Icons";
import cn from "classnames";

const RelatedItems = ({related_searches}) => {

    const itemsRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0)
    const [maxScroll, setMaxScroll] = useState(0);

    useEffect(()=>{
        if(itemsRef.current){
            itemsRef.current.dispatchEvent(new Event('scroll'))
        }
    },[related_searches])

    if(!related_searches) return '...loading';

    const onClickLeft = () => {
        if(itemsRef.current){
            itemsRef.current.scrollLeft = Math.max(scrollLeft - 200, 0);
        }
    }

    const onClickRight = () => {
        if(itemsRef.current){
            itemsRef.current.scrollLeft = Math.min(scrollLeft + 200, maxScroll);
        }
    }

    const onScroll = (e) => {
        if(itemsRef.current){
            setScrollLeft(e.target.scrollLeft);
            setMaxScroll(e.target.scrollWidth - e.target.clientWidth)
        }
    }

    return(
        <Container>
            <LeftButton onClick={onClickLeft} className={cn({isActive: scrollLeft > 0 })}>
                <IconPrev/>
            </LeftButton>

            <RightButton onClick={onClickRight} className={cn({isActive: scrollLeft < maxScroll})}>
                <IconNext/>
            </RightButton>

            <RelatedSearchItems ref={itemsRef} onScroll={onScroll}>
                <ItemContainer className={'itemList'}>
                        {
                            related_searches?.map((item, index)=>(
                                <RelatedItem to={`/search/photos/${item.title}`} key={index}>
                                    {item.title}
                                </RelatedItem>
                            ))
                        }
                </ItemContainer>
            </RelatedSearchItems>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  width: 1180px;
  overflow: hidden;
`
const RelatedSearchItems = styled.div`
  overflow: auto;
`
const ItemContainer = styled.div`
  display: flex;
  height: 90px;
  width: max-content;
  transition: left 0.2s;
`

const RelatedItem = styled(NavLink)`
  z-index: 500;
  border: solid 1px #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  height: 37px;
  padding-bottom: 2px;
  font-size: 13px;
  color: #777;
  transition:all 0.2s;

  &:hover {
    border: solid 1px #444;
    color: #444
  }

  text-transform: capitalize;
  margin: 0 4px;
  &:first-child{
    margin-left: 0px;
  }
  &:last-child{
    margin-right: 0px;
  }
`
const LeftButton = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 900;
  cursor: pointer;
  border: solid 1px #fff;
  position: absolute;
  background:rgba(255,255,255,0.8);
  width: 45px;
  height: 37px;
  left: 0;
  top: 0;
  opacity:0;
  transition: all 0.2s;
  &.isActive {
    opacity: 1;
    display: flex;
    background: rgba(255,255,255,0.85);
  }
`
const RightButton = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 900;
  cursor: pointer;
  border: solid 1px #fff;
  position: absolute;
  background:rgba(255,255,255,0.8);
  width: 45px;
  height: 37px;
  right: 0;
  top: 0;
  opacity: 0;
  transition: all 0.2s;
  &.isActive {
    opacity: 1;
    display: flex;
    background: rgba(255,255,255,0.85);
  }
`

export default RelatedItems;