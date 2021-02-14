import React from 'react';
import styled from 'styled-components';

import PhotoItem from "./PhotoItem";
import {setPhotoGroups} from "../../lib/Common";

const PhotoList = ({photos = []}) => {

    if(photos.length === 0) return null;

    const photoGroups = setPhotoGroups(photos);

    return (
        <Container>
            <GroupRow>
                {
                    photoGroups.map((group, groupIndex) => (
                        <Group key={groupIndex}>
                            {
                                group.map((item, index) => (
                                    <Col key={index}>
                                        <PhotoItem {...item}/>
                                    </Col>
                                ))
                            }
                        </Group>
                    ))
                }
            </GroupRow>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1200px;
  box-sizing: border-box;
  padding: 0 10px;
  margin: 0 auto;
`

const GroupRow = styled.div`
  display: flex;
  margin-left: -12px;
  margin-right: -12px;    
`

const Group = styled.div`
  width: 33.3333%;
`;

const Col = styled.div`
  padding: 12px;
`

export default PhotoList;