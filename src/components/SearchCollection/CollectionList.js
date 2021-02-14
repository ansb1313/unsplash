import React from 'react';
import styled from 'styled-components';
import CollectionItemBox from "./CollectionItemBox";

const CollectionList = ({collections = []}) => {

    console.log('collections', collections)

    if(!collections) return '...Loading';

    return(

        <Container>
            {
                collections.map((item, index)=>{

                    return(
                        <CollectionItemBox {...item} key={index} />
                        )

                })
            }

        </Container>

    )

}

const Container = styled.div`

  width: 1200px;
  margin: 0 auto;    
  display: flex;
  flex-wrap: wrap;
`

export default CollectionList;