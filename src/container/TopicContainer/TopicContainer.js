import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import PhotoList from "../../components/Photo/PhotoList";
import cn from 'classnames'
import {topicActions} from "../../redux/actionCreators";

const TopicContainer = ({match}) => {

    const slug = match.params.id

    useEffect(()=>{

        getTopicPage();

    },[slug])

    const {topicPage, topicPhotos} = useSelector(state => state.topics);

    const getTopicPhotos = () => {

        topicActions.getTopicPhotos({
            per_page:12
        }, slug);

    }

    const getTopicPage = () => {
        topicActions.getTopicPage({
        }, slug)

        getTopicPhotos()
    }

    const conImage = topicPage.top_contributors

    if(!topicPage || !conImage) return '...loading';

    const setTotalPhotosNumber = (num) => {
        if(num >= 1000) {
            return (num / 1000).toFixed(1) + "k"
        }
        return num
    }

    return(
        <Container>
           <TopicDesc>
               <div className="textArea">
                   <h1>
                       {topicPage.title}
                   </h1>
                   <p>
                       {topicPage.description}
                   </p>
               </div>

               <div className="contents">
                   <div className="info">
                       <div className="statusBox">
                           <div className="icon">
                                     <span>
                           <svg width="18" height="18" className="_1wVHI" version="1.1" viewBox="0 0 32 32"
                                aria-hidden="false"><path
                               d="M16 2.7C8.7 2.7 2.7 8.7 2.7 16s6 13.3 13.3 13.3 13.3-6 13.3-13.3S23.3 2.7 16 2.7zm-.7 24v-8.3h-4.6l6.7-13v8.3h4.5l-6.6 13z"></path></svg>
                       </span>
                               <p>Status</p>
                           </div>

                           <div className="status">
                               <div className={cn('circle', topicPage.status)}></div>
                               <p>{topicPage.status}</p>
                           </div>
                       </div>
                       <div className="curator">
                           <div className="icon">
                                                  <span>
                           <svg width="18" height="18" className="_1wVHI" version="1.1" viewBox="0 0 32 32"
                                aria-hidden="false"><path
                               d="M16 2.7C8.6 2.7 2.7 8.6 2.7 16s6 13.3 13.3 13.3 13.3-6 13.3-13.3S23.4 2.7 16 2.7zm0 4c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 18.9c-3.3 0-6.3-1.7-8-4.3 0-2.7 5.3-4.1 8-4.1s8 1.5 8 4.1c-1.7 2.6-4.7 4.3-8 4.3z"></path></svg>
                       </span>
                               <p>Curator</p>
                           </div>
                           <img src="https://images.unsplash.com/profile-1544707963613-16baf868f301?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff" alt=""/>
                       </div>
                       <div className="contribution">
                           <div className="icon">
                                                  <span>
                           <svg width="18" height="18" className="_1wVHI" version="1.1" viewBox="0 0 32 32"
                                aria-hidden="false"><path
                               d="M26.7 4H5.3C4.5 4 4 4.5 4 5.3v21.3c0 .9.5 1.4 1.3 1.4h21.3c.8 0 1.3-.5 1.3-1.3V5.3c.1-.8-.4-1.3-1.2-1.3zm-20 20l4.7-6 3.3 4 4.7-6 6 8H6.7z"></path></svg>
                       </span>
                               <p>
                                   Contribution
                               </p>
                           </div>

                           <div className="totalPhoto">
                               <p>{setTotalPhotosNumber(topicPage.total_photos)}</p>
                           </div>
                       </div>
                       <div className="topContributors">
                           <div className="icon">
                                                <span>
                           <svg width="18" height="18" className="_1wVHI" version="1.1" viewBox="0 0 32 32"
                                aria-hidden="false"><path
                               d="M30.67 22.67v4h-5.34v-4a6.21 6.21 0 00-3.1-5.16c3.68.49 8.44 2.25 8.44 5.16zM12 16a5.34 5.34 0 10-5.33-5.33A5.33 5.33 0 0012 16zm8 0a5.34 5.34 0 000-10.67 5.72 5.72 0 00-1.77.32 8 8 0 010 10A5.44 5.44 0 0020 16zm-8 1.33c-3.56 0-10.67 1.79-10.67 5.34v4h21.34v-4c0-3.55-7.11-5.34-10.67-5.34z"></path></svg>
                       </span>
                               <p>Top contributors</p>
                           </div>

                           <div className="profileImg">
                               {
                                   topicPage.top_contributors.map((item, index) => (
                                       <img src={item.profile_image.large} key={index} alt=""/>
                                   ))
                               }
                           </div>

                       </div>
                   </div>
                   <div className="submit">
                       <a href="#!">
                           Submit to <span>{topicPage.title}</span>
                       </a>
                   </div>
               </div>


           </TopicDesc>

           <PhotoList photos={topicPhotos}></PhotoList>

        </Container>

    )

}

const Container = styled.div`
    
    padding: 60px 0;
    
`

const TopicDesc = styled.div`

  max-width: 1200px;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 0 auto 80px auto;
  display: flex;

  .textArea {
    width: 66.6666%;

    h1 {
      font-size: 42px;
      color: #222;
      line-height: 1.2;
      margin-bottom: 20px;
    }

    p {

      font-weight: 500;
      width: 80%;
    }
  }

  .contents {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    width: 33.3333%;
    box-sizing: border-box;
    padding-left: 15px;
    .info {
      width: 100%;
      border: solid 1px #ddd;
      box-sizing: border-box;
      padding: 20px;
      -webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;
      margin-bottom: 15px;
      
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 47px;

        .icon {
          display: flex;
          align-items: center;

          p {
            font-size: 14px;
          }

          span {
            fill: rgb(209, 209, 209);
            margin-right: 14px;
            padding-top: 7px;

          }
        }
      }

      .statusBox {
        border-bottom: solid 1px rgba(0,0,0,0.06);
        .status {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 24px;
          background: #C2EBD3;
          width: 60px;
          -webkit-border-radius: 2px;
          -moz-border-radius: 2px;
          border-radius: 2px;
          box-sizing: content-box;

          p {
            text-transform: capitalize;
            display: inline-block;
            margin-bottom: 5px;
            font-size: 12px;
            font-weight: bolder;
            color: #555;
            margin-left: 5px;
            padding-top: 2px;
          }

          .circle {
            width: 7px;
            height: 7px;
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            border-radius: 100%;
            background: red;

            &.open {
              width: 7px;
              height: 7px;
              -webkit-border-radius: 100%;
              -moz-border-radius: 100%;
              border-radius: 100%;
              background: #3CB46E;
            }

          }
        }
      }

      .curator {
        border-bottom: solid 1px rgba(0,0,0,0.06);
      }

      .contribution {
        border-bottom: solid 1px rgba(0,0,0,0.06);
        .totalPhoto{
          p{
            font-size: 12px;
            font-weight: bold;
          }
        }
      }

      .topContributors {
        .profileImg {
          img {
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            border-radius: 100%;
            width: 15px;
            margin-left: 7px;
          }
        }
      }
    }
    
    .submit{
      background: #111;
      width: 100%;
      text-align: center;
      -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
      a{
        font-size: 14px;
        display: block;
        color: #fff;
        padding: 10px;
        span{
          font-weight: bold;
        }
      }
    }
  }

`



export default TopicContainer;