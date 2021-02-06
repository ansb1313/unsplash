import React from 'react';
import styled from 'styled-components';
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {AiFillTwitterCircle, AiOutlineInstagram} from "react-icons/ai";
import {RiUnsplashFill} from "react-icons/ri";

const TopicFooter = () => {

    return(

        <Container>
           <FooterTop>
            <Title>Unsplash</Title>

            <List>
                <div className="bottomMenu">
                    <ul>
                        <li><a href="#!">About</a></li>
                        <li><a href="#!">Blog</a></li>
                        <li><a href="#!">Community</a></li>
                        <li><a href="#!">Join the team</a></li>
                    </ul>
                    <ul>
                        <li><a href="#!">Developer/API</a></li>
                        <li><a href="#!">Press</a></li>
                        <li><a href="#!">Help Center</a></li>
                    </ul>
                    <ul>
                        <li><a href="#!">Unsplash Awards</a></li>
                        <li><a href="#!">Unsplash for Education</a></li>
                        <li><a href="#!">Unsplash for iOS</a></li>
                        <li><a href="#!">Official Apps</a></li>
                    </ul>
                </div>

                <ul className={'icons'}>
                    <li><a href="#!"><FaTwitter></FaTwitter></a></li>
                    <li><a href="#!"><FaFacebook></FaFacebook></a></li>
                    <li><a href="#!"><FaInstagram></FaInstagram></a></li>
                </ul>
            </List>
           </FooterTop>
           <FooterBottom>
               <div className="icons">
                   <a href="#!">
                    <RiUnsplashFill></RiUnsplashFill>
                   </a>
                   <p>Make something awesome, Ahn.</p>
               </div>
               <div className="bottomList">
                   <ul>
                       <li><a href="#!">Privacy Polish</a></li>
                       <li><a href="#!">Terms</a></li>
                       <li><a href="#!">Security</a></li>
                   </ul>
               </div>

           </FooterBottom>
        </Container>

    )

}

const Container = styled.div`


  padding: 20px 0 70px 0;
  margin: 0 auto;
  width: 1180px;
    
`

const FooterTop = styled.div`

  border-bottom: solid 1px rgba(0,0,0,0.15);
  box-sizing: border-box;

`

const Title = styled.div`
    
  font-size: 26px;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 20px;
    
`

const List = styled.div`
    
  margin-bottom: 50px;
    display: flex;
  justify-content: space-between;
  
  .bottomMenu{
    display: flex;
    ul{
      margin-right: 100px;
      li{
        padding: 5px 0;
        a{
          color: #767676;
          font-size: 14px;
          letter-spacing: -0.5px;
          &:hover{
            color:#111
          }
        }
      }
    }
  }
  
  .icons{
    display: flex;
    li{
      margin-left: 15px;
      a{
        font-size: 18px;
        color: #767676;
        &:hover{
          color:#111
        }
      }
    }
    

  }
    
`

const FooterBottom = styled.div`
    
    padding-top: 20px;
    display: flex;
  justify-content: space-between;
  .icons{
    display: flex;
    align-items: center;
    p{
      font-size: 14px;
      color: #767676;
      letter-spacing: -0.5px;
    }
    a{
      margin-right: 5px;
      font-size: 26px;
      color: #111;
      box-sizing: border-box;
      display: inline-block;
      margin-top: 5px;
    }
  }
  .bottomList{
    display: flex;
    align-items: center;
    ul{
      display: flex;
      li{
        margin-left: 20px;
        a{
          color:#767676;
          font-size: 14px;
          letter-spacing: -0.5px;
          &:hover{
            color: #111;
          }
        }
      }
    }
  }
    
`

export default TopicFooter;