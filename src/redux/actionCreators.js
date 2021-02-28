import {bindActionCreators} from 'redux';

import {Action as AppAction} from './app/redux';
import {Action as PhotosAction} from './photos/redux';
import {Action as SearchAction} from './search/redux';
import {Action as TopicsAction} from './topics/redux';
import {Action as CollectionAction} from "./collections/redux";
import {Action as UserAction} from "./users/redux";

import store from "./store";

const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const photoActions = bindActionCreators(PhotosAction.Creators, dispatch);
export const searchActions = bindActionCreators(SearchAction.Creators, dispatch);
export const topicActions = bindActionCreators(TopicsAction.Creators, dispatch);
export const collectionActions = bindActionCreators(CollectionAction.Creators, dispatch);
export const userActions = bindActionCreators(UserAction.Creators, dispatch);