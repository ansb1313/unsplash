import React from 'react';
import styled from 'styled-components';


const PhotoItem = ({user, urls}) => {

    return(

        <Container>
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
    
    box-shadow: 1px 1px 10px rgba(0,0,0,0.15);
    
`
const Thumb = styled.div`
    
    img{
      height: 300px;
      width: 100%;
      object-fit: cover;
    }
    
`
const Desc = styled.div`
    
  background: #fff;
  display: flex;
  align-items: center;
  padding: 15px;
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