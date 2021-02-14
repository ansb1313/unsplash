import { createActions, createReducer } from 'reduxsauce';

const initialState = {
    topics: [],
    topicPage: {},
    topicPhotos: []
};

export const Action = createActions({
    updateState: ['props'],
    getTopics: ['payload'],
    getTopicPage: ['payload', 'slug'],
    getTopicPhotos: ['payload', 'slug'],
}, {
    prefix: 'TOPICS/'
})

const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {props}) => ({
        ...state,
        ...props
    }),
})

export default reducer;
