import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components';
import {useSelector} from "react-redux";
import Detail from "./Detail";
import PhotoList from "../Photo/PhotoList";
import List from "../List/List";
import SearchCollectionItem from "../Search/SearchCollectionItem";
import Tags from "../tags";
import {PhotoItemHeartIcon, PhotoItemPlusIcon, PopupDownIcon} from "../../images/Icons";
import cn from "classnames";
import {Overlay} from "../Layout/Layout.styled";
import {appActions} from "../../redux/actionCreators";

const headerOffset = 50;

const PhotoPopup = ({onClose}) => {

    const {photoPopup} = useSelector(state => state.photos);

    const searchCollections = (item, index) => <SearchCollectionItem {...item} key={index}/>

    const [activeButton, setActiveButton] = useState(false)
    const [fixedHeader, setFixedHeader] = useState(false)
    const [scrollTrackTop, setScrollTrackTop] = useState(false)

    if(!photoPopup) return 'loading'

    const onClickStopEvent = (e) => {
        e.stopPropagation();
    }

    const onClickLikeButton = (e) => {
        setActiveButton(!activeButton)
    }

    const scl = (e) => {
        if(e.target.scrollTop > headerOffset){
            setFixedHeader(true)
        }else{
            setFixedHeader(false)
        }
    }


    return (
        <Container>
            <Overlay onClick={onClose} alpha={0.6} />
            <ScrollTrack className={cn('scrollTrack',{isActive:scrollTrackTop, fixedHeader})}
                         onClick={(e)=>{onClickStopEvent(e)}} onScroll={scl}>
                <ScrollHeader onClick={()=> appActions.updateState({mode:'dark'})}>
                    <div className="userId">
                        <img src={photoPopup.photo.user.profile_image.small} alt=""/>
                        <div className="name">
                            <a className={'username'} href="#!">
                                {photoPopup.photo.user.name}
                            </a>
                            <a className={'instagram'} href="#!">
                                @{photoPopup.photo.user.username}
                            </a>
                        </div>
                    </div>
                    <div className="button">
                        <div className="iconButton">
                            <div className={cn('heartButton',{isActive:activeButton})} onClick={onClickLikeButton}>
                                <PhotoItemHeartIcon/>
                            </div>
                            <div className="plusButton">
                                <PhotoItemPlusIcon/>
                            </div>
                        </div>
                        <div className="downloadMenu">
                            <a href="#!">Download</a>
                            <PopupDownIcon/>
                        </div>
                    </div>
                </ScrollHeader>
                <Contents>
                    <Detail {...photoPopup.photo} />
                    <PhotoList data={photoPopup.related.results}/>
                    <Tags tags={photoPopup.photo?.tags}/>
                </Contents>
                <CollectionList>
                    <h4>Related collections</h4>
                        <List data={photoPopup?.photo?.related_collections?.results}
                              render={searchCollections}
                        />
                </CollectionList>
            </ScrollTrack>
        </Container>
    )
}



const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1200;
  box-sizing: border-box;
`;


const ScrollTrack = styled.div`
    position: relative;
    padding-top: ${headerOffset + 64}px;
    height: 100%;
    overflow-y: auto;
    width: 1150px;
    margin: 0 auto;
    border-radius: 6px;
    height: 100%;
  //transform: translateX(-50%);
`;

const ScrollHeader = styled.div`
  background: #fff;
  position: absolute;
  top: ${headerOffset}px;
  z-index: 800;
  margin: 0 auto;
  width: 1150px;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background: ${props => props.theme[props.theme.mode].popupHeader};
  
  .fixedHeader &{
    position: fixed;
    top:0 ;
    margin:0 auto;
  }
  .userId {
    display: flex;
    align-items: center;
    img {
      border-radius: 100%;
      display: block;
    }
    .name {
      width: 150px;
      margin-left: 10px;
      .username {
        display: block;
        width: 100%;
        font-size: 16px;
        color: #444;
      }

      .instagram {
        display: block;
        width: 100%;
        font-size: 12px;
        color: #555;
      }
    }
  }

  .button {
    display: flex;
    align-items: center;
    .iconButton{
      display: flex;
      align-items: center;
      margin-right: 8px;
      div {
        cursor: pointer;
        padding: 6px 10px;
        background: #fff;
        border-radius: 4px;
        border: solid 1px #cdcdcd;
        display: flex;
        align-items: center;
        margin-left: 8px;
        &.isActive {
          background: #ff3b3b;
          svg{
            fill:white;
          }
          &:hover{
            svg{
              fill: white;
            }
          }
        }
        svg {
          fill: #787878;
        }
        &:hover {
          svg {
            fill: #111;
          }
        }
      }
    }

    .downloadMenu {
      border: solid 1px #cdcdcd;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;

      a {
        color: #555;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        padding: 6px 8px;
        border-right: solid 1px #cdcdcd;
      }

      svg {
        padding-top: 1px;
        margin: 0 4px;
        fill: #767676;
      }
    }
  }
`

const Contents = styled.div`
    background:#fff;
    position: relative;
`;

const CollectionList = styled.div`
  
  h4{
    box-sizing: border-box;
    padding:0 10px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #000;
  }
  padding: 50px 0;
  background: #fff;
    
`
const CollectionWrap = styled.div`
    
    
    
`

export default PhotoPopup;