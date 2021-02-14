import React from 'react';
import styled from 'styled-components';

const CollectionItemBox = (props) => {


    if(!props){
        return '...loading'
    }

    const {
        preview_photos,
        title,
        total_photos,
        user,
        tags
    } = props

    const previewPhoto = {...preview_photos}
    const tag = tags.slice(0,3)


    return(

        <Container>
            <div className="opacity">
                <div className="whiteBox"></div>
                <ImageBox>
                    <div className="regularImage">
                        {
                            previewPhoto[0] ?

                                <img src={previewPhoto[0].urls.small} alt="" /> :

                                null
                        }

                    </div>
                    <div className="colImage">
                        <div className="innerTopImage">
                            {
                                previewPhoto[1] ?

                                    <img src={previewPhoto[1].urls.small} alt="" /> :

                                    null
                            }
                        </div>
                        <div className="innerBottomImage">
                            {
                                previewPhoto[2] ?

                                    <img src={previewPhoto[2].urls.small} alt="" /> :

                                    null
                            }
                        </div>
                    </div>
                </ImageBox>
                <div className="title">
                    <h1>{title}</h1>
                </div>

            </div>

            <TextArea>
                <div className="text">

                    <p>{total_photos} photos · Curated by {user.first_name} {user.last_name} </p>
                </div>
                <div className="tag">
                    {
                        tag.map((item, index) => (
                            <p key={index}>
                                {item.title}
                            </p>
                        ))
                    }
                </div>
            </TextArea>
        </Container>

    )

}

const Container = styled.div`
  
  width: 33.3333%;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;

  //position: relative;
  .opacity{
    cursor: pointer;
    position: relative;
    .whiteBox{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      transition: all 0.3s;
      background: #fff;
      opacity: 0;
      &:hover{
        
        opacity: 0.2;
      }
    }
    .title{
      h1 {
        font-size: 16px;
        letter-spacing: 0.5px;
      }
    }
  }

`

const ImageBox = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
  

  
  .regularImage{
    width: 70.25%;
    margin-right: 0.5%;
    background: #333;
    color: #fff;
    img{
      display: block;
      height: 100%;
      width: 100%;
    }
    height: 269px;
  }
  .colImage{

    height: 269px;
    width: 29.25%;
    .innerTopImage{
      background: #eee;
      width: 100%;
      height: 50%;
      img{
        display: block;
        height: 100%;
        width: 100%;
      }
    }
    .innerBottomImage{
      box-sizing: border-box;
      background: #eee;
      width: 100%;
      height: 50%;
      img{
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }
  
  
`

const TextArea = styled.div`

  .text {


    p {
      font-size: 14px;
      color: #787878;
      line-height: 2;
      margin-bottom: 8px;
    }
  }

  .tag {
    p {
      font-size: 14px;
      display: inline-block;
      color: #787878;
      padding: 3px 8px;
      background: #eee;
      cursor: pointer;
      margin-right: 10px;
      transition: all 0.2s;
      text-transform: capitalize;
      &:hover {
        color: #111;
        background: #dedede;
      }
    }
  }


`

export default CollectionItemBox;