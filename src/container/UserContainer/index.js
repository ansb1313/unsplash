import React, {useEffect} from 'react';
import styled from 'styled-components';
import {userActions} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import UserHeader from "../../components/User/UserHeader";
import {Route, Switch} from "react-router-dom";
import PhotoList from "../../components/Photo/PhotoList";
import UserCollection from "../../components/User/UserCollection";
import UserLikes from "../../components/User/UserLikes";
import TopicFooter from "../../components/TopicsFooter";

const UserContainer = (props) => {

    const {match} = props;
    const username = match.params.username
    const id = match.params.id;

    useEffect(()=>{
        getUserPhotos()
    },[username])

    const {userData, userPhotos, userCollections, userLikes, count} = useSelector(state => state.users)

    const getUserPhotos = () => {
        userActions.getUserPhotos(username)
    }

    console.log('userLikes',userLikes)



    return(

        <Container>
            <UserHeader data={userData}/>
            <Switch>
                <Route path={'/users/:username/photos'}>
                    <PhotoList data={userPhotos}/>
                </Route>
                <Route path={'/users/:username/collections'}>
                    <UserCollection data={userCollections} />
                </Route>
                <Route path={'/users/:username/likes'}>
                    <UserLikes data={userLikes}/>
                </Route>
            </Switch>
            <TopicFooter paddingTopValue={100}/>

        </Container>

    )

}

const Container = styled.div`
    
    
    
`

export default UserContainer;