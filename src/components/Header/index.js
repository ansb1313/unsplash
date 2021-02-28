import React from 'react';
import styled from 'styled-components';
import {Route, useHistory} from "react-router-dom";
import {HiDotsHorizontal} from "react-icons/hi";
import qs from 'qs';

import IdConfirm from "./IdConfirm";
import {SiUnsplash} from "react-icons/si";
import SearchBox from "../SearchBox";
import HeaderTopicList from "./HeaderTopicList";
import {CLIENT_ID} from "../../constants";
import HeaderSearchMenu from "./HeaderSearchMenu";

const Header = () => {


    const history = useHistory()

    const onClick = () => {
        history.push('/')
    }



    return (
        <>
        <Blank/>
        <Container className={"Header"}>
            <IdConfirm/>
            <HeaderContainer>
                <Logo onClick={onClick}>
                    <SiUnsplash/>
                </Logo>
                <SearchBox shape={"round"}/>
                <Gnb>
                    <ul>
                        <li>
                            <a href="#!">Home</a>
                        </li>
                        <li>
                            <a href="#!">
                                Brands
                                <span>New</span>
                            </a>
                        </li>
                        <li>
                            <Button>
                                <HiDotsHorizontal/>
                            </Button>
                        </li>
                    </ul>
                </Gnb>
                <ButtonBox>
                    <SubmitPhoto>
                        <button>
                            Submit a photo
                        </button>
                    </SubmitPhoto>
                    <NoticeButton>
                        <svg width="24" height="24" version="1.1" viewBox="0 0 32 32" aria-hidden="false"><path d="M19.1263 28.2c-6.1826 2.1388-11.82761 1.2031-13.03726-2.4062-.40321-1.3368-.26881-2.6735.53762-4.144.40322-.6684.40322-1.7378.13441-2.5398l-.94084-3.0746c-.80643-2.1388-.53762-4.4113.26881-6.28281C6.62666 8.28215 7.5675 7.21273 8.91155 6.277l-.26881-.80206c-.40322-.80206.1344-1.87148.94083-2.13883l1.61283-.53471c.9409-.40103 1.8817.13368 2.1505 1.06942l.2688.80206c1.7473-.13368 3.3601.26735 4.8386 1.20309 1.6129 1.06941 2.8225 2.53985 3.4945 4.54503l1.0753 3.3419c.2688.6684.9408 1.6041 1.7472 1.8715 1.4785.5347 2.5537 1.4704 2.9569 2.8072 1.3441 3.3419-2.4193 7.6195-8.6019 9.7584zm6.0482-8.9564c-.5376-1.4704-4.3009-2.2725-9.4083-.5347s-7.52668 4.8124-6.98906 6.2828c.53762 1.4705 4.30096 2.2725 9.40836.5347s7.5267-4.8123 6.989-6.2828zm-10.0803 5.4808c-1.3441 0-2.4193-.6684-3.2257-1.6041-.1345-.1337-.1345-.4011 0-.5348.9408-.802 2.2848-1.6041 4.4353-2.4061.8064-.2674 1.6129-.5347 2.4193-.6684.2688 0 .4032.1337.4032.2673v.6684c0 1.6041-.9408 3.0746-2.2849 3.743.1344 0-.9408.5347-1.7472.5347z"/></svg>
                    </NoticeButton>
                    <PersonalMenu>
                        <a href={`https://unsplash.com/oauth/authorize?${qs.stringify({
                            client_id: CLIENT_ID,
                            redirect_uri: 'http://localhost:3000',
                            response_type: 'code',
                            scope: 'public read_user'
                        })}`}>
                            <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff" alt=""/>
                        </a>
                    </PersonalMenu>
                </ButtonBox>
            </HeaderContainer>
            <BottomMenu>
                <Route path={["/", '/topics/:id','/topics']} component={HeaderTopicList} exact={true}></Route>
                <Route path={['/search/:category/:id', '/search/collections/:id', '/search/users/:id']}>
                    <HeaderSearchMenu/>
                </Route>
            </BottomMenu>
        </Container>
        </>
    )

}

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background: #fff;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,.08), 0 0 1px rgba(1,0,0,.1);
`
const Blank = styled.div`
    
  width: 100%;
  height: 115px;
  background: mediumslateblue;
    
`

const BottomMenu = styled.div`
    
    
    
`

const HeaderContainer = styled.div`
    padding: 12px 15px;
      display: flex;
      justify-content: space-between;
      width: 100%;  
`;



const ButtonBox = styled.div`
    
    display: flex;
    align-items: center;   
`

const NoticeButton = styled.div`
    
    margin: 0 9px;
    
    svg{
      display: block;
      width: 24px;
      height: 24px;
      fill: #767676;
    }
    cursor: pointer;
    &:hover{
      svg{
        fill: #111;
      }
    }
    
`

const SubmitPhoto = styled.div`
 
    display: flex;
    align-items: center;
    button{
      width: 118.18px;
      height: 32px;
      background: #eee;
      border: none;
      color: #767676;
      font-weight: 500;
      font-family:'Roboto', sans-serif;
      cursor: not-allowed;
      border-radius: 5px;
    }
    
`

const PersonalMenu = styled.div`
  
  
    a{
      
      display: block;
    }
    img{
      border-radius: 100%;
      display: block;
    }
    
`

const Gnb = styled.div`
    padding: 0 36px;
    ul{
      display: flex;
      align-items: center;
      
      li{
        
        margin:0 10px;
        
        svg{
          margin-top: 3px;
          padding: 0;
        }
        
        a{
          font-size: 14px;
          font-weight: 500;
          font-family:'Roboto', sans-serif;
          position: relative;
          span{
            color: transparent;
            position: relative;
            font-size: 10px;
            top: -10px;
            background: linear-gradient(94deg,#ff2a2a,#7074ff);
            -webkit-background-clip: text;
          }
        }
        
        :nth-child(1){
          a{
            color:#111;
          }
        }

        :nth-child(2){
          a{
            color:#767676;
            &:hover{
              color: #111;
            }
          }
        }

        :nth-child(3){
          a{
            &:hover{
              color: #111;
            }
          }
        }
        
        Button{
          width: 21px;
        }
        
      }
    }
    

  
`

const Logo = styled.div`
    
    svg{
      display: block;
      color: #111;
      height: 38px;
      width: 38px;
    }

  cursor: pointer;
  margin-right:15px;
    
`


const Button = styled.button`
    
    width: 34px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #767676;
  cursor: pointer;
  font-size: 20px;
  background: none;
  border: 0;
  &:focus{
    outline: 0;
  }
  svg{
    width: 20px;
    height: 20px;
    display: block;
    fill:#767676;
  }
  
  &:hover{
    
    svg{
      fill: #111;
    }
  }
  
`

export default Header;