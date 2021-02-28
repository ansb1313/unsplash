import React from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import {useHistory} from "react-router-dom";

const TopicItem = ({topics}) => {

    const bgImage = topics.cover_photo.urls.regular;

    const bgStyle = {
        backgroundImage:`url(${bgImage}`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'0px'
    }

    const history = useHistory()

    const onClick = () => {
        history.push(`/topics/${topics.slug}`)
    }

    return(

        <Container>
            <TopicBox onClick={onClick}>
                <CoverBox style={bgStyle}>
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