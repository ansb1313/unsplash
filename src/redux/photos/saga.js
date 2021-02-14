import {takeLatest, all, call, put} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api/API";

function* saga() {
    yield all([
        takeLatest(Action.Types.GET_PHOTOS, function* ({payload}) {
            const result = yield call(API.getPhotos, payload);

            if (result.data) {
                yield put(Action.Creators.updateState({
                    photos: result.data
                }))
            }
        })

    ])
}

export default saga;