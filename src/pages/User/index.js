import React from 'react';
import styled from 'styled-components';
import UserContainer from "../../container/UserContainer";

const User = (props) => {

    return(
        <Container>
            <UserContainer {...props} />
        </Container>
    )

}

const Container = styled.div`

  padding-top: 145px;
    
`

export default User;