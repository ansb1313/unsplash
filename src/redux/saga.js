import {call, put, takeLatest} from "@redux-saga/core/effects";
import {Action} from "./reducer";
import API from "../api/API";

const saga = function* (){

    yield takeLatest(Action.Types.GET_PHOTOS, function* ({payload}){

        try {
            const result = yield call(API.getPhotos,payload);

            if(result.data){
                yield put(Action.Creators.updateState({
                    photos:result.data
                }))
            }

        }catch (e) {
            console.log(e)
        }

    });

    yield takeLatest(Action.Types.SEARCH_PHOTOS, function* ({payload}){

        try {

            const result = yield call(API.searchPhotos,payload)

            if(result.data){
                yield put(Action.Creators.updateState({
                    searchResult: result.data
                }))
            }

        }catch (e) {

            console.log(e)

        }

    })

}

export default saga