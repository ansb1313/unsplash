import {all, call, put, takeLatest} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api/API";

function* saga(){
    yield all([
        takeLatest(Action.Types.GET_USER_PHOTOS, function* ({username}){
            const [userData, userPhotos, userCollections, userLikes] =
                yield all([call(API.getUserData, username),
                    call(API.getUserPhotos, username),
                    call(API.getUserCollections, username),
                    call(API.getUserLikes, username)])

            if(userData.data){
                yield put(Action.Creators.updateState({
                    userData:userData.data,
                    userPhotos:userPhotos.data,
                    userCollections:userCollections.data,
                    userLikes:userLikes.data
                }))
            }
        })
    ])
}

export default saga;