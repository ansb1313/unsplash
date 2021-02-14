import React from 'react';
import styled from 'styled-components';


const PhotoItem = (props) => {

    const {
        user,
        urls,
        width,
        height,
        color
    } = props;

    const ratio = height / width * 100;

    return(
        <Container style={{paddingBottom: ratio + '%', backgroundColor: color}}>
            <Thumb>
                <img src={urls.regular} alt=""/>
            </Thumb>
            <Desc>
                <Avatar>
                    <img src={user.profile_image.medium} alt=""/>
            
                </Avatar>
                <div className="username">
                    {user.username}
                </div>
            </Desc>
        </Container>

    )

}

const Container = styled.div`
    position:relative;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.15);
`

const Thumb = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`

const Desc = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  &:hover {
     opacity: 1;
  }
  .username{
    font-size: 14px;
    color: #333;
  }    
`

const Avatar = styled.div`
    
    img{
      width: 32px;
      height: 32px;
      -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
      margin: 10px;
    }
    
`

const AvatarBlank = styled.div`
    
    
    
`

export default PhotoItem;