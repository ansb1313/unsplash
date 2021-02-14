import { createActions, createReducer } from 'reduxsauce';

const initialState = {
    searchResult: {},
    collections:[],
    users:[]
};

export const Action = createActions({
    updateState: ['props'],
    searchPhotos: ['payload'],
    searchCollections:['payload'],
    searchUsers:['payload']
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
