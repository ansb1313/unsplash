import React from 'react';
import styled from 'styled-components';
import SearchBox from "../SearchBox";

const Visual = () => {

    return(

        <Container className={"Visual"}>
            <VisualTitle>
                <TextArea>
                    <h1>Unsplash</h1>
                    <p>
                        The internet’s source of <a href='#!'>freely-usable images.</a><br/>
                        Powered by creators everywhere.
                    </p>
                </TextArea>
                <SearchBox shape={"square"}/>

            </VisualTitle>

            <VisualFooter>
                <PhotoBy>

                        <a href="#!">Photo of the Day</a>
                        &nbsp; <p>by</p> &nbsp;

                            <a href="#!">
                                Mick Truyts
                            </a>


                </PhotoBy>
                <AboutUnsplash>
                   <p>Read more about the</p>&nbsp; <a href="#!">Unsplash License</a>
                </AboutUnsplash>
                <NeedTo>
                    <a href="#!">
                        <img className="_11pPi _2OP8p"
                             src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image" />
                        <p>
                            All you need to create a website.
                        </p>
                    </a>
                </NeedTo>
            </VisualFooter>

        </Container>

    )

}

const Container = styled.div`
    background: #eee;
  margin-bottom: 30px;
    
`
const VisualTitle = styled.div`
    
  max-width: 66.6666%;
  margin: 0 auto;
  padding: 144px 12px 152px 12px;
    
`
const TextArea = styled.div`

  h1{
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 16px;
  }
  
  p{
    margin-top: 16px;
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 24px;
    a{
      color: #111;
    }
  }
  
`

const VisualFooter = styled.div`
    
  width: 100%;
  div{
    width: 33.3333%;
  }
  display: flex;
  align-items: center;

  div{
    font-size: 13px;
    
  }
  box-sizing: border-box;
  padding: 20px;
  color: #111;
  a{
    color: #111;
    font-weight: bold;
  }
  
`

const PhotoBy = styled.div`
    
    text-align: left;
    display: flex;
    p{
      opacity: 0.7;
    }
    a{
      opacity: 0.7;
      &:hover{
        opacity: 1;
      }
    }
    
`
const AboutUnsplash = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;

    p{opacity: 0.7}
  
    a{
      opacity: 0.7;
      &:hover{
        opacity: 1;
      }
    }
    
`
const NeedTo = styled.div`
    
  :hover{
    a{
      opacity: 1;
    }
    p{
      opacity: 1;
    }
  }
    text-align: right;
  a{
    opacity: 0.7;
    p{
      opacity: 0.7;
    }
    position: relative;
    
    img{
      width: 150px;
      height: 34px;
      position: absolute;
      right: 0;
      top: -40px;
    }
  }
    
`

export default Visual;