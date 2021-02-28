import {all, call} from 'redux-saga/effects';
import appSaga from './app/saga';
import photosSaga from './photos/saga';
import searchSaga from './search/saga';
import topicsSaga from './topics/saga';
import collectionSaga from './collections/saga'
import userSaga from './users/saga'

function* saga() {
    yield all([
        call(appSaga),
        call(photosSaga),
        call(searchSaga),
        call(topicsSaga),
        call(collectionSaga),
        call(userSaga)
    ])
}

export default saga;