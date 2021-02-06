import {call, put, takeLatest} from "@redux-saga/core/effects";
import {Action} from "./reducer";
import API from "../api/API";


const saga = function* (){

    takeLatest(Action.Types.GET_PHOTOS, function* ({payload}){

        const result = yield call(API.getPhotos, payload);

        try {
            if(result.data){
                yield put(Action.Creators.updateState({
                    photos: result.data
                }))
            }
        }catch (e) {
            console.log(e)
        }

    })

}

export default saga