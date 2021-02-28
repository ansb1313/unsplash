import React from 'react';
import styled from 'styled-components';
import {ShareArrow} from "../../images/Icons";

const CollectionHeader = ({data}) => {

    const {
        cover_photo,
        title,
        description,
        user
    } = data

    return(

        <Container>
            <HeaderContents>
                <BackGroundImage>
                    <img src={cover_photo?.urls.full} alt=""/>
                </BackGroundImage>
                <Items>
                    <div className="title">
                        <h1>
                            {title}
                        </h1>
                    </div>
                    <div className="description">
                        {description}
                    </div>
                    <div className="user">
                        <img src={user?.profile_image.small} alt=""/>
                        <span>{user?.first_name}&nbsp;{user?.last_name}</span>
                    </div>
                    <div className="shareButton">
                        {ShareArrow(14,14)}
                        <span>
                            Share
                        </span>
                    </div>
                </Items>

            </HeaderContents>
        </Container>

    )

}

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 70px 0 50px 0;
`

const HeaderContents = styled.div`
    
    
    
`

const Items = styled.div`
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 10px;
  height: 100%;
  position: relative;
  .title {
    font-size: 20px;
    margin-bottom: 15px;
    cursor: default;
  }
  .description {
    font-size: 15px;
    font-weight: 550;
    margin-bottom: 25px;
    cursor: default;
  }
  .user {
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      border-radius: 100%;
      width: 28px;
    }
    span {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 500;
      color: #767676;
      letter-spacing: -0.5px;
      text-decoration: underline;
    }
  }
  .shareButton {
    opacity: 0.9;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 60px;
    cursor: pointer;
    border: solid 1px #c2c2c2;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 4px;
    height: 28px;
    width: 72px;
    padding-bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    svg {
      fill: #636363;
    }
    span {
      color: #636363;
      margin-left: 5px;
      font-size: 13px;
      font-weight: 500;
    }
    &:hover{
      opacity: 1;
      border: solid 1px #222;
      svg{
        fill: #222;
      }
      span{
        color: #222;
      }
    }
  }
`

const BackGroundImage = styled.div`
  z-index: -1;
  position: absolute;
  height: 268px;
  background: #eee;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  img{
    object-fit: cover;
    width: 100%;
    height: 100%;

  }
  ::after{;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    content: "";
    background: linear-gradient(hsla(0,0%,100%,.8),hsla(0,0%,100%,.9) 50%,#fff);
  }
    
`


export default CollectionHeader;