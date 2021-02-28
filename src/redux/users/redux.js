import {createActions, createReducer} from "reduxsauce";

const initialState = {
    userData:{},
    userPhotos:[],
    userCollections:[],
    userLikes:[],
    count:0
}

export const Action = createActions({
    updateState:['props'],
    getUserPhotos:['username']
},{
    prefix:'USERS/'
});

const reducer = createReducer(initialState,{
    [Action.Types.UPDATE_STATE]:(state,{props}) => ({
        ...state,
        ...props
    }),
});

export default reducer;