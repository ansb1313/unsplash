import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import cn from "classnames";
import {PhotoItemHeartIcon, PhotoItemPlusIcon, PopupDownIcon} from "../../images/Icons";
import {useSelector} from "react-redux";

const PopupHeader = () => {

    const {photoPopup} = useSelector(state => state.photos);

    const [activeButton, setActiveButton] = useState(false)

    const onClickStopEvent = (e) => {
        e.stopPropagation()
    }
    const onClickLikeButton = (e) => {
        e.stopPropagation();
        setActiveButton(!activeButton)
    }


    return(

        <Container>
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
                        <div className="plusButton" onClick={onClickStopEvent}>
                            <PhotoItemPlusIcon/>
                        </div>
                    </div>
                    <div className="downloadMenu">
                        <a href="#!">Download</a>
                        <PopupDownIcon/>
                    </div>
                </div>
            </ScrollHeader>
        </Container>

    )

}

const Container = styled.div`
`
const ScrollHeader = styled.div`
  z-index: 800;
  margin: 0 auto;
  width: 1700px;
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

export default PopupHeader;