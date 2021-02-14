import {all, call} from 'redux-saga/effects';
import appSaga from './app/saga';
import photosSaga from './photos/saga';
import searchSaga from './search/saga';
import topicsSaga from './topics/saga';

function* saga() {
    yield all([
        call(appSaga),
        call(photosSaga),
        call(searchSaga),
        call(topicsSaga)
    ])
}

export default saga;