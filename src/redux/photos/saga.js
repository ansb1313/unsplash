import {takeLatest, all, call, put, select} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api/API";

function* saga() {
    yield all([
        takeLatest(Action.Types.GET_PHOTOS, function* ({payload}) {
            yield put(Action.Creators.updateState({isLoading: true}))
            const prevPhotos = yield select(state => state.photos.photos)
            const result = yield call(API.getPhotos, payload);
            if (result.data) {
                yield put(Action.Creators.updateState({
                    photos: [
                        ...prevPhotos, //처음엔 빈배열
                        ...result.data
                    ]
                }))
            }
            yield put(Action.Creators.updateState({isLoading:false}))
        }),

        takeLatest(Action.Types.GET_PHOTO_BY_ID, function* ({id}) {
            const [photoById, photoRelated] = yield all([call(API.getPhotoById, id), call(API.getPhotoRelated, id)]);

            if (photoById.data) {
                yield put(Action.Creators.updateState({
                    photoPopup: {
                        id,
                        photo: photoById.data, // photos/id 에서 받아온 데이터
                        related: photoRelated.data // photos/id/related 에서 받아온 데이터
                    }
                }))
            }
        })

    ])
}

export default saga;