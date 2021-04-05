import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {Overlay} from "../Layout/Layout.styled";

const Menus = ({openMenu}) => {

    return(
            <Container className={cn({openMenu})} >
            </Container>
    )

}

const Container = styled.div`
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 100;
      width: 200px;
      height: 350px;
      background: #111;
      -webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;
      transform: scale(0);
      transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      transform-origin: 0 0;
      &.openMenu{
        transform: none;
      }
`

const Contents = styled.div`
    
`

export default Menus;