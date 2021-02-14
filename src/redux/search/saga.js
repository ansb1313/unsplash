import {takeLatest, all, call, put} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api/API";

function* saga() {
    yield all([
        takeLatest(Action.Types.SEARCH_PHOTOS, function* ({payload}) {

            const result = yield call(API.searchPhotos, payload)

            if (result.data) {
                yield put(Action.Creators.updateState({
                    searchResult: result.data
                }))
            }
        }),

        takeLatest(Action.Types.SEARCH_COLLECTIONS, function* ({payload}){

            const result = yield call(API.getCollectionsInSearch, payload)

            if(result.data){
                yield put(Action.Creators.updateState({
                    collections:result.data
                }))
            }

        }),

        takeLatest(Action.Types.SEARCH_USERS, function* ({payload}){

            const result = yield call(API.getUsersInSearch,payload);

            if(result.data){
                yield put(Action.Creators.updateState({
                    users: result.data
                }))
            }

        })
    ])
}

export default saga;