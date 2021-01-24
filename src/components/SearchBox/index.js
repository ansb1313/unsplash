import React, {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";


const SearchBox = () => {

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
                <Label>
                    <Input type="text"
                           value={value}
                           onChange={onChange}
                    />
                </Label>
                <Button>
                    <AiOutlineSearch></AiOutlineSearch>
                </Button>
            </Form>
        </Container>

    )

}

const Container = styled.div`

  padding: 40px 0;
  max-width: 700px;
  margin: 0 auto;

`

const Form = styled.form`
    
  display: flex;
  width: 100%;
  
  
`

const Label = styled.label`
  
  display: block;
  width: 100%;
  height: 40px;
  border: 1px solid #aaa;
    
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
    
    width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  background: #aaa;
  font-size: 20px;
  border: 0;
  &:focus{
    outline: 0;
  }  
  
`

export default SearchBox;