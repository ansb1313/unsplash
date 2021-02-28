import React from 'react'
import styled from 'styled-components';

const List = ({className, data = [], render = () => {}}) => {

    return (
        <Container className={className}>
            <Row>
                {
                    data.map((item, index) => (
                        <Col key={index}>
                            {render(item, index)}
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}


const Container = styled.div`
  box-sizing: border-box;
  padding: 0 10px;
  
`;

const Row = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-left: -12px;
    margin-right: -12px;    
`;

const Col = styled.div`
    width: 33.3333%;
    padding: 12px;
`;

export default List;