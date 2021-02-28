import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import {navigate} from "../../lib/History";

const SearchUserItem = (props) => {

    const [follow, setFollow] = useState(false);

    console.log('userProps',props)

    const {
        instagram_username,
        name,
        photos,
        profile_image,
        username
    } = props

    const onClickFollow = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setFollow(!follow)
    }

    return(

        <Container>
            <div className="contents" onClick={()=>{navigate(`/users/${username}/photos`)}}>
                <UserId>
                    <div className="profileImage">
                        <img src={profile_image.large} alt=""/>
                    </div>
                    <div className="username">
                        <h4>{name}</h4>
                        <p>@{instagram_username}</p>
                    </div>
                </UserId>
                <UserImageBox>
                    {
                        photos.map((item,index) => (
                            <img src={item.urls.small} key={index} alt=""/>
                        ))
                    }
                </UserImageBox>
                <FollowButton onClick={onClickFollow} className={cn('followButton', {isActive:follow})} >
                        {
                                follow
                                ?
                                <div className="following">
                                    <svg width="18" height="18" version="1.1" viewBox="0 0 32 32"
                                         aria-hidden="false">
                                        <path
                                            d="M10.3 22.7l4-3.9c-.5-.1-.9-.1-1.3-.1-3.6 0-10.7 1.8-10.7 5.3v2.7h12l-4-4zM13 16c2.9 0 5.3-2.4 5.3-5.3S15.9 5.3 13 5.3s-5.3 2.4-5.3 5.3S10.1 16 13 16m8.6 11.3L17 22.7l1.9-1.9 2.8 2.8 6.8-6.9 1.9 1.9-8.8 8.7z"></path>
                                    </svg>
                                    &nbsp;
                                <p>Following</p>
                                </div>
                                :
                                <div className="follow">
                                    <svg width="18" height="18" version="1.1" viewBox="0 0 32 32"
                                    aria-hidden="false">
                                        <path
                                        d="M23.7 24v2.7H2.3V24c0-3.5 7.1-5.3 10.7-5.3s10.7 1.8 10.7 5.3zM13 16c2.9 0 5.3-2.4 5.3-5.3S15.9 5.3 13 5.3s-5.3 2.4-5.3 5.3S10.1 16 13 16zm14.7-2.7v-4H25v4h-4V16h4v4h2.7v-4h4v-2.7h-4z"></path>
                                    </svg>
                                    &nbsp;
                                <p>Follow</p>
                            </div>
                        }
                </FollowButton>

            </div>
        </Container>

    )

}

const Container = styled.div`
  
  .contents{
    cursor: pointer;
    border: solid 1px #ddd;
    -webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;
    box-sizing: border-box;
    padding: 15px;
    transition: all 0.3s;
    &:hover{
      border: solid 1px #111;
    }
  }
    
`

const UserId = styled.div`

  display: flex;
  align-items: center;
  margin-bottom: 15px;

  .profileImage {
    width: 70px;
    height: 70px;
    background: #eee;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 15px;
    img {
    
      display: block;
      object-fit: cover;
    }
  }

  .username {
    height: 50px;

    h4 {
      width: 100%;
    }

    p {
      color: #6d6d6d;
      font-size: 14px;
    }
  }

`

const UserImageBox = styled.div`
  
  margin-bottom: 15px;
  width: 100%;
  height: 90px;
  img{
    height: 100%;
    width: 32%;
    margin-right: 2%;
    &:last-child{
      margin-right: 0!important;
    }
  }  
  
`

const FollowButton = styled.div`
  
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #ddd;
  padding: 5px 0px; 
  transition: all 0.3s;
  -webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;
  &:hover{
    border: solid 1px #111;
    p{
      color: #111;
    }
    svg{
      fill: #111;
    }
  }
  
  div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  svg{
    fill: #797979;
    margin-right: 3px;
  }
  p{
    color: #797979;
    font-size: 14px;
  }
  &.isActive{
    background: #eee;
    color: #767676;
    border: solid 1px #eee;
  }
    
`

export default SearchUserItem;