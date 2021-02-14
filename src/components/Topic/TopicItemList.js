import React from 'react';
import styled from 'styled-components';
import TopicItem from "./TopicItem";
import Header from "../Header";

const TopicItemList = ({topics}) => {

    const [featured, ...allTopics] = topics

    console.log('featured', featured)

    return(

        <Container>

            <TextArea>
                <h1>
                    Topics
                </h1>
                <p>
                    Explore the world through topics of beautiful photos free to use under the
                </p>
                <h3>Unsplash License.</h3>
            </TextArea>

            <Featured>

                <h2>Featured</h2>

                <TopicItem topics={featured}></TopicItem>

            </Featured>


            <AllTopics>
                <h2>All topics</h2>
                <div className="contents">
                    {
                        allTopics.map((item, index) => (
                            <TopicItem topics={item} key={index}></TopicItem>
                        ))
                    }
                </div>
            </AllTopics>

            <Footer>


            </Footer>
        </Container>

    )

}

const Container = styled.div`
    
    padding: 55px 0;
    
`

const TextArea = styled.div`
  
    text-indent: 10px;
    margin-bottom: 60px;
    h1{
      font-size: 46px;
      line-height: 1.2;
      margin-bottom: 20px;
    }
    
    p{
      font-size: 18px;
      color:#111;
      line-height: 1.4;
      
    };
  h3{
    font-weight: 400;
    color: #767676;
    transition: color .1s ease-in-out,opacity .1s ease-in-out;
    text-decoration: underline;
    cursor: pointer;
    opacity: 0.8;
    text-indent: 10px;
    font-size: 18px;
    &:hover{
      opacity: 1;
      color:#222;
    }
  }
    
`

const Featured = styled.div`
  
    margin-bottom: 60px;
  
    h2{
      text-indent: 10px;
      margin-bottom: 20px;
      font-size: 28px;
    }
    
`

const AllTopics = styled.div`
  
  
  h2{
    margin-bottom: 20px;
    font-size: 28px;
    text-indent: 10px;
  }
  .contents{
    display: flex;
    flex-wrap: wrap;
  }


`

const Footer = styled.div`
    
    
    
`

export default TopicItemList;