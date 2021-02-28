import { createActions, createReducer } from 'reduxsauce';

const initialState = {
    photos: {
        results: []
    },
    collections: {
        results: []
    },
    users: {
        results: []
    },
    related_searches: []
};

export const Action = createActions({
    updateState: ['props'],
    searchPhotos: ['payload'],
}, {
    prefix: 'SEARCH/'
})

const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {props}) => ({
        ...state,
        ...props
    }),
})

export default reducer;
