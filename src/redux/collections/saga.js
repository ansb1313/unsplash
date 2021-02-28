import {all, call, put, takeLatest} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api/API";

function* saga(){
    yield all([
        takeLatest(Action.Types.GET_COLLECTION_PHOTOS,function* ({id}){
            const [collectionData, collectionPhotos] = yield all( [call(API.getCollectionData, id), call(API.getCollectionPhotos, id)] )
            if(collectionData.data){
                yield put(Action.Creators.updateState({
                    collectionData:collectionData.data,
                    collectionPhotos: collectionPhotos.data,
                }))
            }
        })
    ])
}

export default saga