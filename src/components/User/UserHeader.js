import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import {
    locationIcon,
    portfolioUrlIcon, userCollectionIcon,
    userFollowIcon,
    userFollowingIcon, userHeartIcon,
    userPhotosIcon,
    VerifiedIcon
} from "../../images/Icons";
import {navigate} from "../../lib/History";
import {NavLink, useHistory} from "react-router-dom";

const UserHeader = ({data}) => {

    const history = useHistory()

    console.log('userData',data)

    const {
        profile_image,
        name,
        bio,
        location,
        portfolio_url,
        tags,
        badge,
        username,
        total_collections,
        total_likes,
        total_photos
    } = data

    const url = portfolio_url;

    const replaceUrl = (url) => {
        if(url.indexOf('http://') != -1){
            return url.replace('http://',"")
        }else if(url.indexOf('https://') != -1){
            return url.replace('https://',"")
        }
    }

    const [followIcon, setFollowIcon] = useState(false);

    const RenderIcon = () => {
        if(followIcon === false){
            return userFollowIcon(18,18)
        }else if(followIcon === true){
            return userFollowingIcon(18, 18)
        }
    }
    const onClickIcon = () => {
        setFollowIcon(!followIcon)
    }

    return(
        <Container>
            <Items>
                <div className="imageBox">
                    <div className="profileImage">
                        <img src={profile_image?.large} alt=""/>
                        {badge?.primary && VerifiedIcon(32,32)}
                    </div>
                </div>
                <div className="textArea">
                    <div className="title">
                        <h1>{name}</h1>
                        <div className={cn("iconFollow",{isActive:followIcon})} onClick={onClickIcon}>
                            <RenderIcon/>
                        </div>
                    </div>
                    <div className="description">
                        <p>{bio}</p>
                    </div>
                    <div className="contact">
                        <div className="location" onClick={()=>{history.push(`/search/photos/${location}`)}}>
                            {locationIcon(14,14)}<span>{location}</span>
                        </div>
                        <div className="portfolioUrl">
                            <a href={portfolio_url}>
                                {portfolioUrlIcon(14,14)}<span>{portfolio_url&&replaceUrl(portfolio_url)}</span>
                            </a>
                        </div>
                    </div>
                    <div className="interestTag">
                        <span className={'interestTitle'}>Interests</span>
                        <div className="tagItem">
                            {
                                tags?.custom?.map((item, index)=>(
                                    <span key={index}
                                          onClick={()=>{navigate(`/search/photos/${item.title}`)}}
                                    >{item.title}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Items>
            <UserHeaderMenu>
                <div className="linkItem">
                    <UserPhotos className={'navLink'} activeClassName={'isActive'} to={`/users/${username}/photos`}>
                        {userPhotosIcon(16,16)} <span>Photos {total_photos}</span>
                    </UserPhotos>
                    <UserLikes className={'navLink'} activeClassName={'isActive'} to={`/users/${username}/likes`}>
                        {userHeartIcon(16, 16)} <span>Likes {total_likes}</span>
                    </UserLikes>
                    <UserCollections className={'navLink'} activeClassName={'isActive'} to={`/users/${username}/collections`} >
                        {userCollectionIcon(16,16)} <span>Collections {total_collections}</span>
                    </UserCollections>
                </div>
            </UserHeaderMenu>
        </Container>

    )

}

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`
const Items = styled.div`
  padding-top: 10px;
  padding-bottom: 83px;
  width: 1200px;
  margin: 0 auto;
  display: flex;

  .imageBox {
    width: 33.3333%;
    display: flex;
    justify-content: flex-end;

    .profileImage {
      display: inline-block;
      position: relative;
      margin-right: 52px;

      img {
        border-radius: 100%;
      }

      svg {
        top: 5px;
        left: 90px;
        position: absolute;
      }
    }
  }

  .textArea {
    width: 66.6666%;

    .title {
      display: flex;
      align-items: center;
      font-size: 19px;
      margin-bottom: 12px;

      .iconFollow {
        margin-left: 24px;
        cursor: pointer;
        margin-top: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px #bbb;
        width: 39px;
        height: 30px;
        border-radius: 4px;
        transition: all 0.2s;

        svg {
          fill: #777;
        }

        &:hover {
          border: solid 1px #222;

          svg {
            fill: #222;
          }
        }

        &.isActive {
          border: solid 1px #ddd;
          background: #ddd;

          svg {
            fill: #747474;
          }
        }
      }

    }

    .description {
      width: 70%;
      margin-bottom: 20px;

      p {
        font-size: 15px;
        line-height: 1.5;
      }
    }

    .contact {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        cursor: pointer;

        &:hover{
          span{
            color: #555;
            svg{
              fill: #555;
            }
          }
        }
        
        span {
          color: #787878;
          font-size: 14px;
        }

        svg {
          margin-top: 3px;
          fill: #787878;
          margin-right: 5px;
        }
      }
    }

    .interestTag {
      .interestTitle {
        font-size: 14px;
        margin-bottom: 20px;
        display: inline-block;
      }
      .tagItem {
        font-size: 13px;
        display: flex;
        span {
          cursor: pointer;
          display: block;
          color: #676767;
          background: #eee;
          padding:2px 6px 4px 6px;
          margin-right: 8px;
          text-transform: capitalize;
          transition: all 0.2s;
          &:hover{
            color: #222;
            background: #ddd;
          }
        }
      }
    }
  }
`

const UserHeaderMenu = styled.div`
  width: 100%;

  .linkItem{
    padding:0 15px;
    border-bottom: solid 1px #ccc;
    display: flex;
    align-items: center;
    margin-bottom: 39px;
    .navLink{
      margin-right: 25px;
      display: flex;
      align-items: center;
      padding-bottom: 15px;
      svg{
        transition: all 0.2s;
        fill: #ccc;
      }
      span{
        transition: all 0.3s;
        margin-left: 7px;
        font-size: 13px;
        color: #888;
      }
      &:hover{
        svg{
          fill: #222;
        }
        span{
          color: #222;
        }
      }
      &.isActive{
        position: relative;
        svg{
          fill: #222;
        }
        span{
          color: #222;
        }
        ::after{
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 1.5px;
          background: #222;
          bottom: -1px;
          left: 0;
        }
      }
    }
  }
  
`

const UserPhotos = styled(NavLink)`

`
const UserLikes = styled(NavLink)`

    
`
const UserCollections = styled(NavLink)`

    
`

export default UserHeader;