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

    yield takeLatest(Action.Types.GET_TOPICS, function* ({payload}){

        try{

            const result = yield call(API.getTopics,payload);

            if(result.data){
                yield put(Action.Creators.updateState({
                    topics:result.data
                }))
            }

        }catch (e) {
            console.log(e)
        }

    });

    yield takeLatest(Action.Types.GET_TOPIC_PAGE, function* ({payload}){

        const result = yield call(API.getTopicPage,payload);

        if(result.data){

            yield put(Action.Creators.updateState({
                topicPage: result.data
            }))

        }

    });

    yield takeLatest(Action.Types.GET_TOPIC_PHOTOS, function* ({payload}){

        const result = yield call(API.getTopicPhotos,payload);

        if(result.data){

            yield put(Action.Creators.updateState({
                topicPhotos: result.data
            }))

        }

    })

}

export default saga