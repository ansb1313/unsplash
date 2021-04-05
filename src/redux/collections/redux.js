import {createActions, createReducer} from "reduxsauce";

const initialState = {
    collectionData:{},
    collectionPhotos: [],
}

export const Action = createActions({
    updateState:['props'],
    getCollectionPhotos:['payload', 'id'],
    getCollectionData:['id']
},{
    prefix:'COLLECTION/'
});

const reducer = createReducer(initialState,{
    [Action.Types.UPDATE_STATE]:(state, {props}) => ({
        ...state,
        ...props
    }),
})

export default reducer;