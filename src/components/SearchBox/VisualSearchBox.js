import React, {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";


const VisualSearchBox = () => {

    const history = useHistory()

    const [value, setValue] = useState('')

    const onChange = (e) => {

        setValue(e.target.value)

    }

    const onSubmit = (e) => {

        e.preventDefault();
        history.push(`/search/${value}`)

    }

    return(

        <Container>
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
        </Container>

    )

}

const Container = styled.div`

  max-width: 100%;
  margin: 0 auto;
  background: #fff;
  border-radius: 7px;
  
  
`

const Form = styled.form`
    
  display: flex;
  width: 100%;
  align-items: center;
  
  
`

const Label = styled.label`
  
  display: block;
  width: 100%;
  height: 54px;
    
`

const Input = styled.input`
   display: block; 
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 10px;
  color: #333;
  font-size: 15px;
  border: 0;
  &:focus{
    outline: 0;
  }  
    
`
const Button = styled.button`

  width: 40px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #767676;
  cursor: pointer;
  font-size: 20px;
  background: none;
  border: 0;
  &:focus{
    outline: 0;
  }
  svg{
    width: 24px;
    height: 24px;
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
  
    width: 40px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #767676;
  cursor: pointer;
  font-size: 20px;
  background: none;
  border: 0;
  &:focus{
    outline: 0;
  }
  svg{
    width: 24px;
    height: 24px;
    display: block;
    fill: #767676;
  }
  &:hover{

    svg{
      fill: #111;
    }
  }
  
`

export default VisualSearchBox;