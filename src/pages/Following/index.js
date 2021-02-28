import React from 'react';
import styled from 'styled-components';

const Following = () => {

    return(

        <Container>
           <TextArea>
            <h1>
                Following
            </h1>
            <p>
                The Latest photos from photographers you follow.
            </p>
            <p>
                No photos to display. Follow som Unsplash photographers and
                check back soon
            </p>
           </TextArea>
        </Container>

    )

}

const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding-top: 245px;
  
`

const TextArea = styled.div`
  
  box-sizing: border-box;
  padding: 0 10px;
  h1{
    margin-bottom: 20px;
  }
  p{
    margin-bottom: 5px;
  }

`

export default Following;