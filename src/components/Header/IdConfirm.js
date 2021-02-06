import React from 'react'
import styled from 'styled-components';

const IdConfirm = () => {

    return (
        <Container>
            <p>
                <svg width="32" height="32" className="ddjM8" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
                    <path
                        d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm2 25c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-12c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v12zm0-16c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2z"></path>
                </svg>&nbsp;
                Your email &nbsp;<span>ansb1029@gmail.com</span>&nbsp; has not been confirmed.&nbsp;<a href='#!'>Change email</a>&nbsp;<span>or</span>&nbsp;<a href="#!">Resend confirmation</a>
            </p>
        </Container>
    )
}


const Container = styled.div`
    padding: 9px 9px;  
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    svg{
      fill: #fff;
      width: 14px;
      height: 14px;
    }
    a{
      color: #d1d1d1;
      text-decoration: underline;
    }
    span{
      font-weight: 600;
      opacity: 0.8;
    }
  }
`;

export default IdConfirm;