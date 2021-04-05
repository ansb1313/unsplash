import {all, call, put, select, takeLatest} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api/API";

function* saga(){
    yield all([
        takeLatest(Action.Types.GET_COLLECTION_PHOTOS,function* ({payload, id}){
            yield put(Action.Creators.updateState({isLoading:true}))
            const prevPhotos = yield select(state => state.collections.collectionPhotos)
            const result = yield call(API.getCollectionPhotos, payload, id)
            if(result.data){
                yield put(Action.Creators.updateState({
                    collectionPhotos:[
                        ...prevPhotos,
                        ...result.data
                    ]
                }))
            }
            yield put(Action.Creators.updateState({isLoading:false}))
        }),
        takeLatest(Action.Types.GET_COLLECTION_DATA, function* ({id}){
            const result = yield call(API.getCollectionData,id);
            if(result.data){
                yield put(Action.Creators.updateState({
                    collectionData: result.data
                }))
            }
        })
    ])
}

export default saga