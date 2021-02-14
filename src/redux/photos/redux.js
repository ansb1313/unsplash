import { createActions, createReducer } from 'reduxsauce';

const initialState = {
    photos: [],
};

export const Action = createActions({
    updateState: ['props'],
    getPhotos: ['payload'],
}, {
    prefix: 'PHOTOS/'
})

const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {props}) => ({
        ...state,
        ...props
    }),
})

export default reducer;
