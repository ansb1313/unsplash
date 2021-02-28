import React from 'react';
import styled from 'styled-components';
import SearchBox from "../SearchBox";

const Visual = ({randomPhoto}) => {

    console.log('visual',randomPhoto)

    const bgStyle = {
        backgroundImage:`url(${randomPhoto?.urls.full})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'0px'
    }

    return(

        <Container className={"Visual"} style={bgStyle} >
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
                                {randomPhoto?.user.first_name} {randomPhoto?.user.last_name}
                            </a>


                </PhotoBy>
                <AboutUnsplash>
                   <p>Read more about the</p>&nbsp; <a href="#!">Unsplash License</a>
                </AboutUnsplash>
                <NeedTo>
                    <a href="#!">
                        <span className="img">
                            <img className="_11pPi _2OP8p" src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image" />
                        </span>
                        <p>
                            Create your website today.
                        </p>
                    </a>
                </NeedTo>
            </VisualFooter>

        </Container>

    )

}

const Container = styled.div`
  margin-bottom: 30px;
    
`
const VisualTitle = styled.div`
    
  max-width: 50.6666%;
  margin: 0 auto;
  padding: 144px 12px 162px 12px;
    
`
const TextArea = styled.div`

  h1{
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 16px;
    color: #fff;
  }
  
  p{
    margin-top: 16px;
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 24px;
    color: #fff;
    a{
      color: #fff;
      opacity: 0.85;
      text-decoration: underline;
      text-underline: white;
      transition: 0.3s;
      &:hover{
        opacity: 1;
      }
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
      color: #fff;
      opacity: 0.85;
    }
    a{
      color: #fff;
      opacity: 0.85;
      transition: all 0.3s;
      &:hover{
        opacity: 1;
      }
    }
    
`
const AboutUnsplash = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    color: #fff;
  
    p{opacity: 0.7;
      color: #fff;
    }
  
    a{
      opacity: 0.85;
      color: #fff;
      transition: all 0.3s;
      &:hover{
        opacity: 1;
      }
    }
    
`
const NeedTo = styled.div`
  transition: all 0.3s;
  &:hover{
    a{
      opacity: 1;
    }
    p{
      opacity: 1;
    }
  }
    text-align: right;
  a{
    transition: all 0.3s;
    color: #fff;
    opacity: 0.7;
    p{
      transition: all 0.3s;
      opacity: 0.7;
    }
    position: relative;
    
    .img{
      width: 160px;
      height: 34px;
      position: absolute;
      right: 0;
      top: -30px;
      img{
        width: 100%;
      }
    }
  }
    
`

export default Visual;