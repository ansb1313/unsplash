import React from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import {useHistory} from "react-router-dom";

// const data = [
//     {
//         "id": "bo8jQKTaE0Y",
//         "slug": "wallpapers",
//         "title": "Wallpapers",
//         "description": "From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your mobile and desktop screens. Finally.",
//         "published_at": "2020-04-17T02:31:04Z",
//         "updated_at": "2020-09-22T07:37:55-04:00",
//         "starts_at": "2020-04-15T00:00:00Z",
//         "ends_at": null,
//         "featured": true,
//         "total_photos": 5296,
//         "links": {
//             "self": "https://api.unsplash.com/topics/wallpapers",
//             "html": "https://unsplash.com/t/wallpapers",
//             "photos": "https://api.unsplash.com/topics/wallpapers/photos"
//         },
//         "status": "open",
//         "owners": [
//             {
//                 "id": "QV5S1rtoUJ0",
//                 "updated_at": "2020-09-22T10:49:58-04:00",
//                 "username": "unsplash",
//                 "name": "Unsplash",
//                 "first_name": "Unsplash",
//                 "last_name": null,
//                 "twitter_username": "unsplash",
//                 "portfolio_url": "https://unsplash.com",
//                 "bio": "Behind the scenes of the team building the internet’s open library of freely useable visuals.",
//                 "location": "Montreal, Canada",
//                 "links": {
//                     "self": "https://api.unsplash.com/users/unsplash",
//                     "html": "https://unsplash.com/@unsplash",
//                     "photos": "https://api.unsplash.com/users/unsplash/photos",
//                     "likes": "https://api.unsplash.com/users/unsplash/likes",
//                     "portfolio": "https://api.unsplash.com/users/unsplash/portfolio",
//                     "following": "https://api.unsplash.com/users/unsplash/following",
//                     "followers": "https://api.unsplash.com/users/unsplash/followers"
//                 },
//                 "profile_image": {
//                     "small": "https://images.unsplash.com/profile-1544707963613-16baf868f301?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//                     "medium": "https://images.unsplash.com/profile-1544707963613-16baf868f301?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//                     "large": "https://images.unsplash.com/profile-1544707963613-16baf868f301?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
//                 },
//                 "instagram_username": "unsplash",
//                 "total_collections": 22,
//                 "total_likes": 16720,
//                 "total_photos": 29,
//                 "accepted_tos": true
//             }
//         ],
//         "current_user_contributions": [],
//         "total_current_user_submissions": {},
//         "cover_photo": {
//             "id": "0q_YtRanczI",
//             "created_at": "2018-10-26T03:24:18-04:00",
//             "updated_at": "2020-06-21T01:10:35-04:00",
//             "promoted_at": null,
//             "width": 3992,
//             "height": 2992,
//             "color": "#CBCAC8",
//             "blur_hash": "LEBpFJRk5TR+5toJ^ia#0KfPIoxY",
//             "description": "Greek villa by the coast",
//             "alt_description": "aerial view of city",
//             "urls": {
//                 "raw": "https://images.unsplash.com/photo-1540538581514-1d465aaad58c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
//                 "full": "https://images.unsplash.com/photo-1540538581514-1d465aaad58c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9",
//                 "regular": "https://images.unsplash.com/photo-1540538581514-1d465aaad58c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
//                 "small": "https://images.unsplash.com/photo-1540538581514-1d465aaad58c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
//                 "thumb": "https://images.unsplash.com/photo-1540538581514-1d465aaad58c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
//             },
//             "links": {
//                 "self": "https://api.unsplash.com/photos/0q_YtRanczI",
//                 "html": "https://unsplash.com/photos/0q_YtRanczI",
//                 "download": "https://unsplash.com/photos/0q_YtRanczI/download",
//                 "download_location": "https://api.unsplash.com/photos/0q_YtRanczI/download"
//             },
//             "user": {
//                 "id": "QV5S1rtoUJ0",
//                 "updated_at": "2020-09-22T10:49:58-04:00",
//                 "username": "unsplash",
//                 "name": "Unsplash",
//                 "first_name": "Unsplash",
//                 "last_name": null,
//                 "twitter_username": "unsplash",
//                 "portfolio_url": "https://unsplash.com",
//                 "bio": "Behind the scenes of the team building the internet’s open library of freely useable visuals.",
//                 "location": "Montreal, Canada",
//                 "links": {
//                     "self": "https://api.unsplash.com/users/unsplash",
//                     "html": "https://unsplash.com/@unsplash",
//                     "photos": "https://api.unsplash.com/users/unsplash/photos",
//                     "likes": "https://api.unsplash.com/users/unsplash/likes",
//                     "portfolio": "https://api.unsplash.com/users/unsplash/portfolio",
//                     "following": "https://api.unsplash.com/users/unsplash/following",
//                     "followers": "https://api.unsplash.com/users/unsplash/followers"
//                 },
//                 "profile_image": {
//                     "small": "https://images.unsplash.com/profile-1544707963613-16baf868f301?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//                     "medium": "https://images.unsplash.com/profile-1544707963613-16baf868f301?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//                     "large": "https://images.unsplash.com/profile-1544707963613-16baf868f301?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
//                 },
//                 "instagram_username": "unsplash",
//                 "total_collections": 22,
//                 "total_likes": 16720,
//                 "total_photos": 29,
//                 "accepted_tos": true
//             },
//             "preview_photos": [
//                 {
//                     "id": "8AceP6OOF3o",
//                     "created_at": "2017-05-28T09:48:24-04:00",
//                     "updated_at": "2020-09-22T09:45:00-04:00",
//                     "urls": {
//                         "raw": "https://images.unsplash.com/photo-1495978866932-92dbc079e62e?ixlib=rb-1.2.1",
//                         "full": "https://images.unsplash.com/photo-1495978866932-92dbc079e62e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
//                         "regular": "https://images.unsplash.com/photo-1495978866932-92dbc079e62e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
//                         "small": "https://images.unsplash.com/photo-1495978866932-92dbc079e62e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
//                         "thumb": "https://images.unsplash.com/photo-1495978866932-92dbc079e62e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
//                     }
//                 },
//                 {
//                     "id": "iHJOHaUD8RY",
//                     "created_at": "2016-11-13T04:50:11-05:00",
//                     "updated_at": "2020-09-22T09:31:58-04:00",
//                     "urls": {
//                         "raw": "https://images.unsplash.com/photo-1479030574009-1e48577746e8?ixlib=rb-1.2.1",
//                         "full": "https://images.unsplash.com/photo-1479030574009-1e48577746e8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
//                         "regular": "https://images.unsplash.com/photo-1479030574009-1e48577746e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
//                         "small": "https://images.unsplash.com/photo-1479030574009-1e48577746e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
//                         "thumb": "https://images.unsplash.com/photo-1479030574009-1e48577746e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
//                     }
//                 },
//                 {
//                     "id": "zMV7sqlJNow",
//                     "created_at": "2016-12-28T10:24:02-05:00",
//                     "updated_at": "2020-09-22T09:34:07-04:00",
//                     "urls": {
//                         "raw": "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1",
//                         "full": "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
//                         "regular": "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
//                         "small": "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
//                         "thumb": "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
//                     }
//                 },
//                 {
//                     "id": "YD1uvthZwg4",
//                     "created_at": "2015-12-03T17:39:24-05:00",
//                     "updated_at": "2020-09-22T09:10:19-04:00",
//                     "urls": {
//                         "raw": "https://images.unsplash.com/photo-1449182325215-d517de72c42d?ixlib=rb-1.2.1",
//                         "full": "https://images.unsplash.com/photo-1449182325215-d517de72c42d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
//                         "regular": "https://images.unsplash.com/photo-1449182325215-d517de72c42d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
//                         "small": "https://images.unsplash.com/photo-1449182325215-d517de72c42d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
//                         "thumb": "https://images.unsplash.com/photo-1449182325215-d517de72c42d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
//                     }
//                 }
//             ]
//         },
//     // ... more Topics ...
// ]


const TopicItem = ({topics}) => {

    const bgImage = topics.cover_photo.urls.regular

    console.log('bgImage', bgImage)

    const history = useHistory()

    const onClick = () => {

        history.push(`/topics/${topics.slug}`)

    }


    return(

        <Container>
            <TopicBox onClick={onClick}>
                <CoverBox style={{backgroundImage:`url(${bgImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'0px'}}>
                    <div className={cn('status', topics.status)}>
                        <div className='circle'></div>
                        <p>{topics.status}</p>

                    </div>
                </CoverBox>
                <TextArea>
                    <div className="logo">
                        <h1>{topics.title} <br/><span>by {topics.owners[0].name}</span></h1>

                        <img src={topics.owners[0].profile_image.large} alt=""/>
                    </div>
                    <div className="desc">
                        <p>{topics.description}</p>
                    </div>

                    <div className="contribution">
                        <svg>
                            <path d="M26.7 4H5.3C4.5 4 4 4.5 4 5.3v21.3c0 .9.5 1.4 1.3 1.4h21.3c.8 0 1.3-.5 1.3-1.3V5.3c.1-.8-.4-1.3-1.2-1.3zm-20 20l4.7-6 3.3 4 4.7-6 6 8H6.7z"></path>
                        </svg>
                        <p>{topics.total_photos} contribution</p>
                    </div>


                </TextArea>
            </TopicBox>
        </Container>

    )

}

const Container = styled.div`
    
    width: 33.3333%;
  padding: 10px;
    
`

const TopicBox = styled.div`

  border: solid 1px rgba(0,0,0,0.07);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius:2%;
  width: 100%;
  height: 350px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
  &:hover{
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
    border: solid 1px #ddd;
  }


`

const CoverBox = styled.div`
    
  height: 35%;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  
  .status{
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    background: #C2EBD3;
    width: 60px;
    -webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;
    box-sizing: content-box;
    
    p{
      text-transform: capitalize;
      display: inline-block;
      margin-bottom: 5px;
      font-size: 12px;
      font-weight: bolder;
      color: #555;
      margin-left: 5px;
      padding-top: 2px;
    }
    
    .circle{
      width: 7px;
      height: 7px;
      -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;
      background: red;
      box-sizing: border-box;
    }

    &.open{
      .circle{
        width: 7px;
        height: 7px;
        -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;
        background:#3CB46E;
      }
      
    }
  }
    
`

const TextArea = styled.div`
  
  box-sizing: border-box;
  padding: 20px 20px;
  height: 65%;
  width: 100%;
  background: #fff;
  
  svg{
    width: 30px;
  }
  
  .logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
      font-size: 18px;
      line-height: 1.34;
      span{
        font-size: 15px;
        line-height: 1.6;
        font-weight: 400;
        color: #767676;
        &:hover{
         text-decoration: underline; 
        }
      }
    }
    
    img{
      display: block;
      width: 60px;
      height: 60px;
      -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;
      border: solid 1px rgba(0,0,0,0.1);
    }
    margin-bottom: 20px;
  }
  
  .desc{
    
    height: 50px;
    overflow: hidden;
    p{
      display: block;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.6;
      color: #111;
      text-overflow: ellipsis;
      width: 99%;

      white-space: normal;
      height:3.2em; 
      text-align: left; 
      word-wrap: break-word; 
      display: -webkit-box; 
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;

    }
    
    margin-bottom: 20px;
  }

  .contribution{
    display: flex;
    align-items: center;
    p{
      font-size: 15px;
      font-weight: 400;
    }
    svg{
      width: 30px;
      height: 30px;
      display: block;
      font-size: 16px;
      margin-right: 20px;
      
    }
  }


`







export default TopicItem;