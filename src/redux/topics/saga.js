import {takeLatest, all, call, put} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api/API";

function* saga() {
    yield all([
        takeLatest(Action.Types.GET_TOPICS, function* ({payload}) {

            const result = yield call(API.getTopics, payload);

            if (result.data) {
                yield put(Action.Creators.updateState({
                    topics: result.data
                }))
            }

        }),

        takeLatest(Action.Types.GET_TOPIC_PAGE, function* ({payload, slug}) {

            const result = yield call(API.getTopicPage, payload, slug);

            if (result.data) {

                yield put(Action.Creators.updateState({
                    topicPage: result.data
                }))
            }

        }),

        takeLatest(Action.Types.GET_TOPIC_PHOTOS, function* ({payload, slug}) {

            const result = yield call(API.getTopicPhotos, payload, slug);

            if (result.data) {

                yield put(Action.Creators.updateState({
                    topicPhotos: result.data
                }))

            }

        })
    ])
}

export default saga;