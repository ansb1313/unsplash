import {combineReducers} from 'redux';
import appReducer from './app/redux';
import photosReducer from './photos/redux';
import searchReducer from './search/redux';
import topicsReducer from './topics/redux';
import collectionReducer from './collections/redux';
import userReducer from './users/redux'

const reducer = combineReducers({
    app: appReducer,
    photos: photosReducer,
    search: searchReducer,
    topics: topicsReducer,
    collections: collectionReducer,
    users: userReducer
})

export default reducer;