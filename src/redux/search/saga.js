import {takeLatest, all, call, put} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api/API";

function* saga() {
    yield all([
        takeLatest(Action.Types.SEARCH_PHOTOS, function* ({payload}) {

            const result = yield call(API.searchPhotos, payload)

            if (result.data) {
                const {photos, collections, users, related_searches} = result.data;
                yield put(Action.Creators.updateState({
                    photos,
                    collections,
                    users,
                    related_searches
                }))
            }
        }),
    ])
}

export default saga;