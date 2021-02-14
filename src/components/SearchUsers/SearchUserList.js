import React from 'react';
import styled from 'styled-components';
import SearchUserItem from "./SearchUserItem";

const SearchUserList = ({users=[]}) => {

    if(!users) return 'loading'

    console.log('users', users[0])

    return(

        <Container>

            {
                users.map((item, index) => {
                    return(
                        <SearchUserItem {...item} key={index} />
                        )
                })
            }

        </Container>

    )

}

const Container = styled.div`
    
    display: flex;
  flex-wrap: wrap;
    
`

export default SearchUserList;