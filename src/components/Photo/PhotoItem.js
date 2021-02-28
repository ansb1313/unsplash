import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {PhotoItemArrowIcon, PhotoItemHeartIcon, PhotoItemPlusIcon} from "../../images/Icons";


const PhotoItem = (props) => {
    const {
        id,
        user,
        urls,
        width,
        height,
        color,
        onPopup = () => {}
    } = props;

    const ratio = height / width * 100;

    const [activeButton, setActiveButton] = useState(false)

    const onClickStopEvent = (e) => {
        e.stopPropagation()
    }
    const onClickLikeButton = (e) => {
        e.stopPropagation();
        setActiveButton(!activeButton)
    }

    return(
        <Container style={{paddingBottom: ratio + '%', backgroundColor: color}}
                   onClick={() => onPopup(id)}
        >
            <Thumb>
                <img src={urls.regular} alt=""/>
            </Thumb>
            <CoverBox>
                <InnerContents>
                    <div className="username">
                        <Avatar onClick={onClickStopEvent}>
                            <img src={user.profile_image.medium} alt=""/>
                        </Avatar>
                        <div className="name" onClick={onClickStopEvent}>
                        {user.name}
                        </div>
                    </div>
                    <div className="iconTop">
                        <div className={cn('heartButton',{isActive:activeButton})} onClick={onClickLikeButton}>
                        <PhotoItemHeartIcon/>
                        </div>
                        <div className="plusButton" onClick={onClickStopEvent}>
                        <PhotoItemPlusIcon/>
                        </div>
                    </div>
                    <div className="iconBottom">
                        <div className="arrowButton" onClick={onClickStopEvent}>
                            <PhotoItemArrowIcon/>
                        </div>
                    </div>
                </InnerContents>
            </CoverBox>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.15);
`
const CoverBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 500;
  cursor: zoom-in;
  opacity: 0;
  &:hover{
    opacity: 1;
    background: radial-gradient(circle farthest-corner, rgba(255,255,255,0), rgba(0,0,0,0.45));
  }
`
const Thumb = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`
const InnerContents = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 100%;
  position: relative;
  .username {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    color: #ececec;
    position: absolute;
    left: 17px;
    bottom: 17px;
    .name {
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
  }

  .iconTop {
    position: absolute;
    right: 17px;
    top: 17px;
    display: flex;

    div {
      cursor: pointer;
      padding: 7px 11px;
      background: #eee;
      border-radius: 4px;
      display: flex;
      align-items: center;
      margin-left: 10px;
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

  .iconBottom {
    position: absolute;
    right: 17px;
    bottom: 17px;

    .arrowButton {
      cursor: pointer;
      padding: 7px 11px;
      background: #eee;
      border-radius: 4px;
      display: flex;
      align-items: center;

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
`

const Avatar = styled.div`
    cursor: pointer;
    margin-right: 10px;
    img{
      width: 29px;
      height: 29px;
      -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
    }
`

const AvatarBlank = styled.div`
    
    
    
`

export default PhotoItem;