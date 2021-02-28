import React from 'react';
import styled from 'styled-components';

import PhotoItem from "./PhotoItem";
import {setPhotoGroups} from "../../lib/Common";
import {photoActions} from "../../redux/actionCreators";

const PhotoList = ({data = []}) => {

    if(data.length === 0) return null;

    const photoGroups = setPhotoGroups(data);

    const onPopup = (id) => {
        photoActions.getPhotoById(id)
    }

    return (
        <Container>
            <GroupRow className={'groupRow'}>
                {
                    photoGroups.map((group, groupIndex) => (
                        <Group className={'group'} key={groupIndex}>
                            {
                                group.map((item, index) => (
                                    <Col className={'col'} key={index}>
                                        <PhotoItem {...item}
                                                   onPopup={onPopup}
                                        />
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