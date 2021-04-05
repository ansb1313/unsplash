import { createActions, createReducer } from 'reduxsauce';

const initialState = {
    mode:'light'
};

export const Action = createActions({
    updateState: ['props'],
}, {
    prefix: 'APP/'
})

const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {props}) => ({
        ...state,
        ...props
    }),
})

export default reducer;
