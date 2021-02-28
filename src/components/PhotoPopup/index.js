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
import {photoActions} from "../../redux/actionCreators";

const PhotoPopup = ({onClose}) => {

    const {photoPopup} = useSelector(state => state.photos);

    const searchCollections = (item, index) => <SearchCollectionItem {...item} key={index}/>

    const [activeButton, setActiveButton] = useState(false)

    const onClickStopEvent = (e) => {
        e.stopPropagation();
    }

    const onClickLikeButton = (e) => {
        setActiveButton(!activeButton)
    }

    const [scrollTrackTop, setScrollTrackTop] = useState(false)

    const scl = () => {
        let trackScrollValue = document.querySelector('.scrollTrack').scrollTop;
        if(trackScrollValue>90){
            setScrollTrackTop(true)
        }else{
            setScrollTrackTop(false)
        }
    }

    return (
        <Container>
            <BackGround onClick={onClose} />
            <ScrollTrack className={cn('scrollTrack',{isActive:scrollTrackTop})} onClick={(e)=>{onClickStopEvent(e)}} onScroll={scl}>
                <ScrollHeader>
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
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1200;
  box-sizing: border-box;
  padding-top: 50px;
`;

const BackGround = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:rgba(0,0,0,0.6);
  z-index: -1;
`

const ScrollTrack = styled.div`
    height: 95vh;
    overflow-y: auto;
    width: 1150px;
    margin: 0 auto;
    border-radius: 6px;
    position: relative;
    transition: all 0.2s;
    &.isActive{
      transition: all 0.2s;
      top: -50px;
      height: 100vh;
    }
  //transform: translateX(-50%);
`;

const ScrollHeader = styled.div`
  position: fixed;
  z-index: 800;
  margin: 0 auto;
  width: 1150px;
  background: #fff;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .userId {
    display: flex;
    align-items: center;
    img {
      border-radius: 100%;
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
  padding-top: 30px;
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