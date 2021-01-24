import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, useHistory} from "react-router-dom";
import {AiOutlineSearch, } from "react-icons/ai";
import {IoMdQrScanner} from "react-icons/io";
import {SiUnsplash} from "react-icons/si";
import {HiDotsHorizontal} from "react-icons/hi";
import {IoNotificationsSharp} from "react-icons/all";


const HeaderSearchBox = () => {

    const history = useHistory()

    const [value, setValue] = useState('')

    const onChange = (e) => {

        setValue(e.target.value)

    }

    const onSubmit = (e) => {

        e.preventDefault();
        history.push(`/search/${value}`)

    }

    const onClick = () => {

        history.push('/')

    }

    return(
        <>

        <Container>
            <Logo onClick={onClick}>
                <SiUnsplash></SiUnsplash>
            </Logo>
            <Form onSubmit={onSubmit}>
                <Button>
                    <svg width="32" height="32" className="_3cOFI _2Jh5K _2_G8g" version="1.1" viewBox="0 0 32 32"
                         aria-hidden="false">
                        <path
                            d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
                    </svg>
                </Button>
                <Label>
                    <Input type="text"
                           value={value}
                           onChange={onChange}
                           placeholder='Search free high-resolution photos'
                    />
                </Label>
                <ScanButton>
                    <svg width="32" height="32" className="_2o7Mr _2Jh5K _2_G8g" version="1.1" viewBox="0 0 32 32"
                         aria-hidden="false">
                        <path
                            d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path>
                    </svg>
                </ScanButton>

            </Form>
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
                            <HiDotsHorizontal></HiDotsHorizontal>
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
                    <svg width="24" height="24" version="1.1" viewBox="0 0 32 32" aria-hidden="false"><path d="M19.1263 28.2c-6.1826 2.1388-11.82761 1.2031-13.03726-2.4062-.40321-1.3368-.26881-2.6735.53762-4.144.40322-.6684.40322-1.7378.13441-2.5398l-.94084-3.0746c-.80643-2.1388-.53762-4.4113.26881-6.28281C6.62666 8.28215 7.5675 7.21273 8.91155 6.277l-.26881-.80206c-.40322-.80206.1344-1.87148.94083-2.13883l1.61283-.53471c.9409-.40103 1.8817.13368 2.1505 1.06942l.2688.80206c1.7473-.13368 3.3601.26735 4.8386 1.20309 1.6129 1.06941 2.8225 2.53985 3.4945 4.54503l1.0753 3.3419c.2688.6684.9408 1.6041 1.7472 1.8715 1.4785.5347 2.5537 1.4704 2.9569 2.8072 1.3441 3.3419-2.4193 7.6195-8.6019 9.7584zm6.0482-8.9564c-.5376-1.4704-4.3009-2.2725-9.4083-.5347s-7.52668 4.8124-6.98906 6.2828c.53762 1.4705 4.30096 2.2725 9.40836.5347s7.5267-4.8123 6.989-6.2828zm-10.0803 5.4808c-1.3441 0-2.4193-.6684-3.2257-1.6041-.1345-.1337-.1345-.4011 0-.5348.9408-.802 2.2848-1.6041 4.4353-2.4061.8064-.2674 1.6129-.5347 2.4193-.6684.2688 0 .4032.1337.4032.2673v.6684c0 1.6041-.9408 3.0746-2.2849 3.743.1344 0-.9408.5347-1.7472.5347z"></path></svg>
                </NoticeButton>
                <PersonalMenu>
                    <a href="#!">
                        <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff" alt=""/>
                    </a>
                </PersonalMenu>
            </ButtonBox>
        </Container>
        </>

    )

}



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

const Container = styled.div`
  
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;

`

const Form = styled.form`
    
  display: flex;
  box-sizing: border-box;
  padding:0 10px;
  border-radius: 24px;
  background-color: #eee;
  width: 100%;
`

const Label = styled.label`
  
  display: block;
  height: 38px;
  width: 100%;
  
`

const Input = styled.input`
   display: block; 
  width: 100%;
  height: 100%;
  color: #333;
  background: none;
  font-size: 15px;
  border: 0;
  &:focus{
    outline: 0;
  }
  ::placeholder{
    font-size: 14px;
    font-family:'Roboto', sans-serif;
  }
    
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

const ScanButton = styled.button`
    
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
    fill: #767676;
  }
  &:hover{

    svg{
      fill: #111;
    }
  }
  
`

export default HeaderSearchBox;